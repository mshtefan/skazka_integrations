const Ctrl = require('../base/controller');
const ViewBadges = require('./view_badges');
const ModelBadges = require('./model_badges');
const ViewPopupBadges = require('./view_badges_popup');
const ViewBase = require('../../com/base/view');
const Popup = require('../popup');


class Badges extends Ctrl {
    constructor(app) {
        super(app);

        this._ModelBadges = new ModelBadges();
        this._ModelBadges.on(ModelBadges.EVENT_FETCH, ()=>{
            this._ModelBadges.set({'pointsValue': app.getComponent('Person').getPoints()});
            this._ModelBadges.set({'purchasesValue': app.getComponent('Person').getPurchasesValue()});
            this.updateProgress();
            this.emit(Badges.EVENT_FETCH);
        });

        this._ViewBadges = new ViewBadges({
            model: this._ModelBadges
        });

        this._ViewBadges.enableBinding();
        this._ViewBase = this._ViewBadges;
        this._ModelBase = this._ModelBadges;

        this._ViewBadges.on(ViewBadges.EVENT_POPUP_BADGES, ()=>{
            this.showPopupBadges();
        });

        this._ViewPopupBadges = new ViewPopupBadges({
            model: this._ModelBadges
        });

        this._Popup = new Popup();

        this._ViewPopupBadges.on(ViewPopupBadges.EVENT_MOVE_TO_TASKS, ()=>{
            this._Popup.close();
            let $el = $('a[href="#qust"]');
            $el.click();
            setTimeout(()=>{
                $('html, body').animate({
                    scrollTop: $el.offset().top
                }, 2000);
            }, 500);
        });

        this._ViewPopupBadges.on(ViewPopupBadges.EVENT_POPUP_CLOSE, ()=>{
            this._Popup.close();
        });
    }

    updateProgress() {
        let cost = this._App.getComponent('Person').getPurchasesCost();
        this._ViewBase.updateProgress(cost);
    }

    showPopupBadges(data) {
        let PView = this._ViewPopupBadges;
        PView.render();

        this._Popup.setContent(PView);
        this._Popup.show({width: 815});
    }

    start() {
        this._ModelBadges.fetch();
    }

    getBadges() {
        return this._ModelBadges.get('list');
    }
}

Badges.EVENT_FETCH = 'ctrl.badges.fetch';

module.exports = Badges;