import './styles/app.styl';
import ko from 'knockout';
import 'knockout.validation';
import jQuery from 'jquery';
jQuery.noConflict();

ko.mapping = require('knockout.mapping')
window.ko = ko;
let sp = require('@lib/sp');

class MainView {
    constructor(options) {
        this.config = ko.observable();        

        sp.init(options);

        sp.config.subscribe(data => {
            sp.getUserInfo({
                user_status: 1
            }).then(() => {
                sp.tagsList({
                    show_calculated_values: 1
                })
            });

            this.config(data.partner.loyalty_page_config);


            sp.getUserHistory();
        })
    }
}

for (let component of [
        'profile',
        'status',
        'status-bar',
        'questions',
        'banner',
        'history',
        'coupons'
    ]) {
    ko.components.register(`sailplay-${component}`, require(`./components/${component}`))
}

ko.components.register('sailplay-magic', {
    viewModel: {
        createViewModel: () => {
            return new MainView({
                auth_hash: 'a04986fc79c818e7aef48ffa2ea351909f7e00b2'
            })
        }
    },
    template: require('@templates/magic.html')
});

ko.applyBindings();