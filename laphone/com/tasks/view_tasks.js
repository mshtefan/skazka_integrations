'use strict';

/**
 * Dependencies
 */
const ViewBase = require('../base/view');
const template = require('./tpl_tasks.hbs');
const foreach = require('lodash.foreach');
const ViewTask = require('./view_task');
const Model = require('../base/model');

require('../../less/img/vk.png');
require('../../less/img/ok.png');
require('../../less/img/fb.png');
require('../../less/img/tw.png');
require('../../less/img/otz.png');
require('../../less/img/pl.png');

class ViewTasks extends ViewBase {
    constructor(arg){
        super(arg);
        this._template = template;

        this._elTaskCont = null;

        this.on(ViewBase.EVENT_RENDER, ()=>{
            this._elTaskCont = this.getEl().querySelector('.js-tasks-cont');
        });

        this._domEvents = {
          'click .js-show-more': (e)=>{
              e.preventDefault();
              this.getEl().classList.toggle(ViewTasks.CLASS_SHOW);
            }
        };
    }

    enableBinding() {
        if (this._tplModel) {
            this._tplModel.on(Model.EVENT_CHANGE, this.renderTasks.bind(this));
        }
    }

    _prepareTaskData(action) {
        let map = {
            "system": {
                "inviteFriend":{
                    "name": "Пригласить друга",
                    'icon': 'img/pl.png',
                    'addClass': 'bns_more_point_item_fr'
                },

                "emailBinding":{
                    "name": "Привязать почту",
                    'icon': 'fa fa-envelope-o',
                    'addClass': 'bns_more_point_item_mail'
                }
            },

            "social": {
                "vk": {
                    "desc": {
                        "like": "Вступить в группу",
                        "partner_page": "Рассказать о вебсайте",
                        "purchase": "Рассказать о покупке"
                    },
                    "icon": "img/vk.png",
                    'addClass': 'bns_more_point_item_vk'
                },
                "fb": {
                    "desc": {
                        "like": "Вступить в группу",
                        "partner_page": "Рассказать о вебсайте",
                        "purchase": "Рассказать о покупке"
                    },
                    "icon": "img/fb.png",
                    'addClass': "bns_more_point_item_fb"
                },
                "gp": {
                    "desc": {
                        "like": "Вступить в группу",
                        "partner_page": "Рассказать о вебсайте",
                        "purchase": "Рассказать о покупке"
                    },
                    'icon': 'fa fa-google-plus',
                    'addClass': 'bns_more_point_item_gp'
                },
                "ok": {
                    "desc": {
                        "like": "Вступить в группу",
                        "partner_page": "Рассказать о вебсайте",
                        "purchase": "Рассказать о покупке"
                    },
                    "icon": "img/ok.png",
                    'addClass': "bns_more_point_item_ok"
                },
                "tw": {
                    "desc": {
                        "like": "Вступить в группу",
                        "partner_page": "Рассказать о вебсайте",
                        "purchase": "Рассказать о покупке"
                    },
                    'icon': 'img/tw.png',
                    'addClass': 'bns_more_point_item_tw'
                }
            }
        };

        let mapSocialBtnClasses = {
            'ok': {
                text: 'Однокласники',
                class: 'social-likes__button_odnoklassniki'
            },
            'vk': {
                text: 'Вконтакте',
                class: 'social-likes__button_vk'
            },
            'gp': {
                class: 'social-likes__button_gp',
                text: 'Google+'
            },
            'tw': {
                class: 'social-likes__button_tw',
                text: 'Twitter'
            },
            'fb': {
                class: 'social-likes__button_fb',
                text: 'Facebook'
            }
        };

        let classMap = ['bns_col1', '', 'bns_col2'];

        let data = {
            actionId: action._actionId,
            points: action['points'],
            icon: '',
            text: '',
            index: action.index,
            addClass: ''
        };
        if (map.social[action.socialType]) {
            data['icon'] = map.social[action.socialType].icon;
            data['text'] = map.social[action.socialType].desc[action.action] + ' в ' + mapSocialBtnClasses[action.socialType].text;
            data['addClass'] = classMap[action.index%3];
            data['socialBtn'] = mapSocialBtnClasses[action.socialType].class;
            data['socialBtnText'] = mapSocialBtnClasses[action.socialType].text;
        };

        if (map.system[action.type]) {
            data['text'] = map.system[action.type].name;
            data['icon'] = map.system[action.type].icon;
            data['addClass'] = classMap[action.index%3];;
            data['socialBtn'] = 'social-button_other';
            data['socialBtnText'] = 'Выполнить';
        }

        return data;
    }

    _sort (actions)  {
        var first = [],
            other = [];

        foreach(actions, function (item) {
            if (item.type == 'inviteFriend') {
                first.push(item)
            } else {
                other.push(item);
            }
        });

        return [].concat(first, other);
    }

    renderTasks() {
        this.getEl().removeAttribute('style');
        if (this._elTaskCont)
            this._elTaskCont.textContent = '';

        var actions = this._sort(this._tplModel
          .get('actions')
          .map((action, index) => {
            action._index = index;
            return action;
          }))
        ;

        if (actions.length) {
            this.getEl().style.display = 'block';
            foreach(actions, (action, index)=>{
                let VTask = new ViewTask();
                VTask.setData(this._prepareTaskData(Object.assign(action, {index}))).render();

                VTask.on(ViewTask.EVENT_RUN_TASK, (data)=>{
                    this.emit(ViewTasks.EVENT_RUN_TASK, this._tplModel.get('origin')[action._index]);
                });

                this._elTaskCont.appendChild(VTask.getEl());
                console.log(this._tplModel.get('origin')[action._index]);
                if (this._tplModel.get('origin')[action._index]) {
                    setTimeout(()=>{
                        SAILPLAY.actions.parse(VTask.getEl().querySelector('.js-run-task-wrap'), this._tplModel.get('origin')[action._index]);
                    },100);
                }
            });
            if (this._tplModel.get('actions').length <= 6) {
                var elBtnMore = this.getEl().querySelector('.js-show-more');
                if (elBtnMore) {
                    elBtnMore.style.display = 'none';
                }
            }
        } else {
            this.getEl().style.display = 'none';
        }
    }
}
ViewTasks.EVENT_RUN_TASK = 'view.tasks.task.run';
ViewTasks.CLASS_SHOW = 'show-view-more';

module.exports = ViewTasks;
