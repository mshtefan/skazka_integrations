const Events = require('events');

class Controller extends Events {
    constructor (app) {
        super();
        this._App = app;
        this._ViewBase = null;
        this._ModelBase = null;

        this._settings = {
            viewAutoEnable: true
        };

        this.on(Controller.EVENT_COM_MOUNT, this.enableView.bind(this));
    }

    enableView() {
        if (this._settings.viewAutoEnable) {
            this._ViewBase.enable();
        }
    }

    getCtrlSetting(prop) {
        return this._settings[prop];
    }

    getEl () {
        return this._ViewBase.render().getEl();
    }

    getBaseView () {
        return this._ViewBase;
    }

    getData(prop) {
        if (!prop) return false;
        return this._ModelBase.get(prop);
    }

    start () {}
}

Controller.EVENT_COM_START = 'ctrl.start';
Controller.EVENT_COM_MOUNT = 'ctrl.mount';

module.exports = Controller;