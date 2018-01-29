const Ctrl = require('../base/controller');
const ViewGifts = require('./view_gifts');
const ModelGifts = require('./model_gifts');
const foreach = require('lodash.foreach');
const ViewPopupGetGift = require('./view_popup_gift_get');
const Popup = require('../popup');

class Gifts extends Ctrl {
    constructor(app) {
        super(app);
        this._ModelGifts = new ModelGifts();
        this._ViewBase = new ViewGifts({
            model: this._ModelGifts
        });
        this._ViewBase.enableBinding();

        this._ModelGifts.on(ModelGifts.EVENT_FETCH, ()=>{
            this._ModelGifts.set({'points': app.getComponent('Person').getPoints()});
        });

        this._ViewBase.on(ViewGifts.EVENT_GET, this._showPopupGetGift.bind(this));
    }

     start() {
         this._ModelGifts.set({
             points: this._App.getComponent('Person').getPoints()
         });
         this._ModelGifts.fetch();
    }

    _showPopupGetGift (data) {
        let VPopup = new ViewPopupGetGift(),
            Pop = new Popup();

        VPopup
            .on(ViewPopupGetGift.EVENT_POPUP_CLOSE, ()=>{Pop.close()})
            .on(ViewPopupGetGift.EVENT_BUY_CONFIRM, (data)=>{
                this._ModelGifts.on(ModelGifts.EVENT_PURCHASE, (resp)=>{
                    this.emit(Gifts.EVENT_BUY);
                    if (VPopup.showSuccessMess) {
                        VPopup.showSuccessMess();
                    } else {
                        Pop.close();
                    }
                });
                this._ModelGifts.purchase(data);
            })
            .setData(data)
            .render();

        Pop
            .setContent(VPopup)
            .setTitle('Получение подарка')
            .show({width: 'auto'});
    }
}

Gifts.EVENT_BUY = 'ctrl.gifts.buy';

module.exports = Gifts;