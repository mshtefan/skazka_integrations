import ko from 'knockout';
import sailplay from 'sailplay-hub';

// http://stackoverflow.com/questions/1187518/javascript-array-difference
function arr_diff (a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) a[a1[i]] = true;

    for (var i = 0; i < a2.length; i++)
        if (a[a2[i]]) delete a[a2[i]]; 
        else a[a2[i]] = true;

    for (var k in a) diff.push(k);

    return diff;
};

export default function(messager) {
    return function(params) {
        this.data = ko.observable();
        this.games_tags = ['Хоккей', 'Футбол', 'Фигурное катание', 'Легкая атлетика', 'Беговые лыжи', 'Единоборства'];
        this.for_who_tags = ['Покупаю: Себе', 'Покупаю: Ребенку', 'Покупаю: В подарок'];
        this.training_tags = [
            'Тренировка: 1 раз в неделю или реже', 
            'Тренировка: 2-3 раза в неделю', 
            'Тренировка: 4-5 раз в неделю', 
            'Тренировка: 6 и более раз в неделю'
        ]

        this.email_verified = ['Подтверждение контактных данных']
        this.registration = ['Пользователь заполнил профиль'];
        this.is_register = ko.observable(false);    
        this.vars = ['city', 'address', 'children', 'game_other'];
        this.tooltip_opened = ko.observable(false);

        this.tooltipOpen = () => {
            this.tooltip_opened(true)
        }

        this.tooltipClose = () => {
            this.tooltip_opened(false)
        }

        this.update = config => {
            if (!config) config = this.config;
            sailplay.jsonp.get(config.DOMAIN + config.urls.users.info, {
                auth_hash: config.auth_hash, 
                all: 1,
                purchases: 1
            }, result => {
                let value = ko.mapping.fromJS(result);
                ['first_name', 'last_name', 'middle_name'].map(el => {
                    value.user[el].extend({ required: true, minLength: 3 })
                })               

                if (value.user.birth_date()) {
                    value.user.birth_disabled = ko.observable(true);
                    let birth_date = value.user.birth_date();
                    value.user.birth_day = ko.observable(birth_date.split('-')[2]).extend({required: true, min: 1, max: 31, pattern: { message: "wrong", params: '^[0-9]{1,2}$' }});
                    value.user.birth_month = ko.observable(this.popupVm.months().find(item => item && item.index == birth_date.split('-')[1])).extend({required: true});
                    value.user.birth_year = ko.observable(birth_date.split('-')[0]).extend({required: true, min: 1863, pattern: { message: "wrong", params: '^[0-9]{4}$' }});              
                } else {
                    value.user.birth_day = ko.observable().extend({required: true, min: 1, max: 31, pattern: { message: "wrong", params: '^[0-9]{1,2}$' }});
                    value.user.birth_month = ko.observable().extend({required: true});
                    value.user.birth_year = ko.observable().extend({required: true, min: 1863, pattern: { message: "wrong", params: '^[0-9]{4}$' }}); 
                }

                this.data(value);
                messager.publish(value.user_points.confirmed, 'user_points');
                messager.publish(value.purchases.sum, 'user_purchases_sum');

                this.data().user['child_array'] = ko.observableArray()

                // костыль для дизайна, пустая дата в конец
                this.data().user['child_array'].push({
                    child_bday: ko.observable(), 
                    child_bmonth: ko.observable(),
                    child_byear: ko.observable()
                })

                this.oldChildLength = 0

                sailplay.jsonp.get(config.DOMAIN + config.urls.users.custom_variables.batch_get, {
                    names: JSON.stringify(this.vars),
                    auth_hash: config.auth_hash
                }, result => {
                    if (result.vars.length) {
                        ko.utils.arrayForEach(result.vars, item => {
                            if (item.name == 'children' && item.value>0) {
                                this.oldChildLength = item.value
                                getChildrenVars(item.value)
                            } else if (this.data().user[item.name]) this.data().user[item.name](item.value)
                        })
                        if(!result.vars.find(x=>x.name=='children')){
                            getChildrenVars(1)
                        }
                    }
                })

                var getChildrenVars = (childrenQuantity) => {
                    // если есть дети, то делаем запрос на получених их из их юзерварса, каждая дата это один юзерварс
                    // children это общее количество записей дат рождения детей
                    var children_vars_names = []
                    // например если там 3 даты, то они будут иметь название child_birthdate, child_birthdate_2, child_birthdate_3
                    for (var i = 1; i <= childrenQuantity; i++) {
                        children_vars_names.push('child_birthdate' + (i==1 ? '' : '_'+i))
                    };
                    sailplay.jsonp.get(config.DOMAIN + config.urls.users.custom_variables.batch_get, {
                        names: JSON.stringify(children_vars_names),
                        auth_hash: config.auth_hash
                    }, result => {
                        if (result.vars.length) {
                            // сортируем полченные даты чтобы отображались по порядку на всякий случай
                            var sortedResult = result.vars.sort((x,y)=>{
                                function getIndex(item){
                                    var regexResult = /_(\d+$)/.exec(item.name)
                                    return regexResult ? regexResult[1] : "1"
                                }
                                var xIndex = getIndex(x)
                                var yIndex = getIndex(y)
                                return xIndex<yIndex
                            })
                            ko.utils.arrayForEach((sortedResult), item => {
                                this.data().user['child_array'].unshift({
                                  child_bday: ko.observable(item.value.split('-')[2]),
                                  child_bmonth: ko.observable(this.popupVm.months().find(i => i && i.index == item.value.split('-')[1])),
                                  child_byear: ko.observable(item.value.split('-')[0])
                                })
                            })
                        }
                    })
                }

                let tags = [].concat(this.training_tags, this.games_tags, this.for_who_tags, this.registration, this.email_verified),
                    tags_to_process = [];

                while (tags.length) {
                    tags_to_process.push(tags.pop());
                    if (tags_to_process.length == 10 || !tags.length) {
                        sailplay.jsonp.get(config.DOMAIN + config.urls.tags.exist, {
                            auth_hash: config.auth_hash,                            
                            tags: JSON.stringify(tags_to_process)
                        }, result => {
                            this.registration.forEach(item => {
                                let found = result.tags.find(t => t.exist && t.name == item)
                                if (found && !this.is_register()) {
                                    this.is_register(true);
                                    messager.publish(null, 'profile_filled');
                                }

                                if (!found) {
                                    setTimeout( () => {     
                                        if (!this.is_register())                                   
                                            this.popupVm.openProfile();
                                    }, 500);
                                }
                            })    
                            this.email_verified.forEach(item => {
                                let found = result.tags.find(t => t.exist && t.name == item)
                                if (found) messager.publish(null, 'email_verified');
                                
                            })                        
                            this.training_tags.forEach(item => {
                                let found = result.tags.find(t => t.exist && t.name == item)
                                if (found) this.data().user['training'](item)
                            })
                            this.for_who_tags.forEach(item => {
                                let found = result.tags.find(t => t.exist && t.name == item);                                
                                if (found) this.popupVm.for_who.push(item)
                            })
                            this.games_tags.forEach(item => {
                                let found = result.tags.find(t => t.exist && t.name == item)
                                if (found) {
                                    if (this.data().user['active_games']) this.data().user['active_games'].push(item)
                                    else this.data().user['active_games'] = [item]
                                }
                            })                                      
                        })

                        tags_to_process = [];
                    }
                }
            })       
        }

        messager.subscribe('init', config => {
            this.config = config;
             this.update(config)
        })
        
        messager.subscribe('profile_update', this.update)

        this.popupUb = {

        }

        this.popupVm = {
            opened: ko.observable(false),
            months: ko.observableArray([
                undefined,
                {index: 1, name: 'Январь'},
                {index: 2, name: 'Февраль'},
                {index: 3, name: 'Март'},
                {index: 4, name: 'Апрель'},
                {index: 5, name: 'Май'},
                {index: 6, name: 'Июнь'},
                {index: 7, name: 'Июль'},
                {index: 8, name: 'Август'},
                {index: 9, name: 'Сентябрь'},
                {index: 10, name: 'Октябрь'},
                {index: 11, name: 'Ноябрь'},
                {index: 12, name: 'Декабрь'}         
            ]),
            step: ko.observable(1),
            games: this.games_tags,
            is_register: ko.observable(false),
            is_profile: true,
            active_games: ko.observableArray([]),
            for_who: ko.observableArray(),
            child_array: ko.observableArray(),
            getField: (field, arr) => {
                if (!this.data()) return '';
                if (!this.data().user[field]) {                    
                    if (arr) this.data().user[field] = ko.observableArray()                    
                    else this.data().user[field] = ko.observable()
                }

                // custom_vars validation
                if (field == 'child_bday') this.data().user[field].extend({min: 1, max: 31, pattern: { message: "wrong", params: '^[0-9]{1,2}$' }})
                if (field == 'child_byear') this.data().user[field].extend({min: 1863, pattern: { message: "wrong", params: '^[0-9]{4}$' }})
                if (field == 'city') this.data().user[field].extend({required: true})
                if (field == 'address') this.data().user[field].extend({required: true})                
                //if (field == 'child_array') console.log(this.data().user[field])
                return this.data().user[field]
            },
            width: ko.observable('356px'),
            openProfile: () => {
                document.body.className += ' no_scrol';
                this.popupVm.step(1);
                this.popupVm.width('356px')
                if (this.data().user['child_array']) 
                    this.popupVm.child_array(this.data().user['child_array']())
                if (this.data().user['active_games'] && this.data().user['active_games'].length)
                    this.popupVm.active_games(this.data().user['active_games']);

                if (this.is_register()) {
                    messager.publish(null, 'profile_filled');
                    this.popupVm.is_register(true);
                }
                this.popupVm.opened(true)                    
            },

            removeChildrenBDay: (item)=>{
                this.popupVm['child_array'].remove(item)
            },

            addChildrenBDay: ()=>{
                this.popupVm['child_array'].push({
                    child_bday: ko.observable(), 
                    child_bmonth: ko.observable(),
                    child_byear: ko.observable()
                })
            },

            back: () => {
                this.popupVm.step(this.popupVm.step() - 1);
                this.popupVm.width('356px')
            },

            check_step_2_for_reg: () => {
                let user = ko.toJS(this.data().user);
                let register_complete = true;

                if (!this.popupVm.active_games().length && !user.game_other) {
                    document.getElementsByClassName('check_sports')[0]
                        .className += ' error'                        

                    register_complete = false;
                } else {
                    document.getElementsByClassName('check_sports')[0]
                        .className = document.getElementsByClassName('check_sports')[0].className
                        .replace(' error', '')
                    
                }

                if (!this.popupVm.for_who || !this.popupVm.for_who().length) {
                    document.getElementsByClassName('for_who')[0]
                        .className += ' error'                        

                    register_complete = false;
                } else {
                    document.getElementsByClassName('for_who')[0]
                        .className = document.getElementsByClassName('for_who')[0].className
                        .replace(' error', '')
                    
                }
                
                if (this.popupVm.for_who && this.popupVm.for_who().indexOf(this.for_who_tags[0]) !== -1) {
                    if (!user.training) {
                        document.getElementsByClassName('child_bday')[0]
                            .className = document.getElementsByClassName('child_bday')[0].className
                            .replace(' error', '')
                        document.getElementsByClassName('child_bmonth')[0]
                            .className = document.getElementsByClassName('child_bmonth')[0].className
                            .replace(' error', '')
                        document.getElementsByClassName('child_byear')[0]
                            .className = document.getElementsByClassName('child_byear')[0].className
                            .replace(' error', '')
                        
                        document.getElementsByClassName('check_training')[0]
                            .className += ' error'                        
                        register_complete = false;    
                    }
                }

                if (this.popupVm.for_who && this.popupVm.for_who().indexOf(this.for_who_tags[1]) !== -1) {                    
                    document.getElementsByClassName('check_training')[0]
                        .className = document.getElementsByClassName('check_training')[0].className
                        .replace(' error', '')                        

/*                    if (!this.data().user.child_bday() || !/^[0-9]{1,2}$/.test(this.data().user.child_bday())) {
                        document.getElementsByClassName('child_bday')[0]
                            .className += ' error'
                        
                        register_complete = false;
                    } else {
                        document.getElementsByClassName('child_bday')[0]
                            .className = document.getElementsByClassName('child_bday')[0].className
                            .replace(' error', '')                        
                    }

                    if (!this.data().user.child_bmonth()) {
                        document.getElementsByClassName('child_bmonth')[0]
                            .className += ' error'

                        register_complete = false;
                    } else {
                        document.getElementsByClassName('child_bmonth')[0]
                            .className = document.getElementsByClassName('child_bmonth')[0].className
                            .replace(' error', '')                                                
                    }

                    if (!this.data().user.child_byear() || !/^[0-9]{4}$/.test(this.data().user.child_byear())) {
                        document.getElementsByClassName('child_byear')[0]
                            .className += ' error'

                        register_complete = false;                        
                    } else {
                        document.getElementsByClassName('child_byear')[0]
                            .className = document.getElementsByClassName('child_byear')[0].className
                            .replace(' error', '')                                                                        
                    }
*/                }

                return register_complete
            },

            next: () => {
                if (this.popupVm.step() == 1) {
                    if (!this.data().user.first_name.isValid()) return;
                    if (!this.data().user.last_name.isValid()) return;
                    if (!this.data().user.middle_name.isValid()) return;
                    if (!this.data().user.birth_day.isValid()) return;
                    if (!this.data().user.birth_month.isValid()) return;
                    if (!this.data().user.birth_year.isValid()) return;
                }
//TODO
                if (this.popupVm.step() == 2 && !this.popupVm.check_step_2_for_reg()) {
                    // if profile is not complete
                    this.popupVm.step(this.popupVm.step() + 2);                    
                } else {
                    this.popupVm.step(this.popupVm.step() + 1);
                }

                if (this.popupVm.step() == 2) this.popupVm.width('650px')
                else this.popupVm.width('356px')
            },

            finish: (_last) => {
                if(window.$('.bns_inner_block :invalid').length) return false

                let user = ko.toJS(this.data().user);
                let obj = { auth_hash: this.config.auth_hash },                
                    primary = {...obj},
                    secondary = {...obj};

                primary = {
                    ...primary, 
                    firstName: user.first_name,
                    lastName: user.last_name,
                    middleName: user.middle_name
                }

                if (user.birth_day && user.birth_month && user.birth_year)
                    primary['birthDate'] = `${user.birth_year}-${user.birth_month.index}-${user.birth_day}`

//                if (user.child_array.length>0){
//              теперь всегда проверяем длинну массива
                if (true){
                    var filteredArray = user.child_array.filter( function(element, index) {
                        return element.child_byear && element.child_bmonth && element.child_bday
                    })

                    filteredArray.forEach( function(element, index) {
                        var keyName = getNameByIndex(index+1)
                        secondary[keyName] = `${element.child_byear}-${element.child_bmonth.index}-${element.child_bday}`
                    });

                    function getNameByIndex(index){
                        if(index==1){
                            return 'child_birthdate'
                        } else {
                            return 'child_birthdate_' + (index)
                        }
                    }
                    
                    secondary['children'] = filteredArray.length

                    for (var i = filteredArray.length+1; i <= this.oldChildLength; i++) {
                        secondary[getNameByIndex(i)] = 'deleted'
                    };

                    this.oldChildLength = filteredArray.length
                }
/*
                if (user.child_bday && user.child_bmonth && user.child_byear)
                    secondary['child_birthdate'] = `${user.child_byear}-${user.child_bmonth.index}-${user.child_bday}`
*/
                let current_tags = [].concat(this.popupVm.for_who(), user.training, this.popupVm.active_games());
                let all_tags = [].concat(this.training_tags, this.games_tags, this.for_who_tags);
                let diff_tags = arr_diff(current_tags, all_tags);

                if (this.popupVm.check_step_2_for_reg()) {
                    current_tags.push(this.registration)
                    this.is_register(true);
                    messager.publish(null, 'profile_filled');

                    setTimeout(() => {
                        messager.publish(null, 'profile_update')
                        messager.publish(null, 'history_update')
                        messager.publish(null, 'actions_update')
                    }, 5000)
                } else this.is_register(false);

                let thirty = {...obj, lang: 'ru', tags: current_tags.join(',') || []};
                let tags_to_process = [];
                while (diff_tags.length) {
                    tags_to_process.push(diff_tags.pop());
                    if (tags_to_process.length == 10 || !diff_tags.length) {
                        sailplay.jsonp.get(this.config.DOMAIN + this.config.urls.tags.delete, {
                            auth_hash: this.config.auth_hash,
                            lang: 'ru',
                            tags: tags_to_process.join(',') || []
                        })

                        tags_to_process = [];
                    }
                }      

                this.vars.forEach(item => {
                    if (user[item]) secondary[item] = user[item]
                })

                sailplay.jsonp.get(this.config.DOMAIN + '/js-api/' + this.config.partner.id + '/users/update/', primary);
                sailplay.jsonp.get(this.config.DOMAIN + this.config.urls.users.custom_variables.add, secondary)
                sailplay.jsonp.get(this.config.DOMAIN + this.config.urls.tags.add, thirty)
                
                if (this.is_register()) {
                    this.popupVm.opened(false);
                    document.body.className = document.body.className.replace(/no_scrol/g, '');                    
                    document.querySelectorAll('.error').forEach(el => {
                        el.classList.remove('error')
                    })
                }
                if (_last) {
                    this.popupVm.opened(false);                
                    document.body.className = document.body.className.replace(/no_scrol/g, '');                    
                }
            }
        }

        messager.subscribe('open_profile', this.popupVm.openProfile)

    };
}