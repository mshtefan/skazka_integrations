'use strict';

const ViewBase = require('../base/view');
const template = require('./tpl_popup_task.hbs');

class ViewPopup extends ViewBase {
    constructor(arg){
        super(arg);
        this._template = template;

        this._domEvents = {
            'click .js-confirm': (e) => {
                e.preventDefault();
                this.emit(ViewPopup.EVENT_CONFIRM, this._tplData);
            },
            'click .js-popup-close': (e) => {
                e.preventDefault();
                this.emit(ViewPopup.EVENT_POPUP_CLOSE);
            }
        };
    }
}

ViewPopup.EVENT_CONFIRM = 'view.popup-task.confirm';
ViewPopup.EVENT_POPUP_CLOSE = 'view.popup-gift-get.popup-close';

module.exports = ViewPopup;