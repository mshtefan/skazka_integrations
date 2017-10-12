'use strict';

/**
 * Dependencies
 */
const ViewBase = require('../base/view');
const template = require('./tpl_gifts.hbs');
const foreach = require('lodash.foreach');
const ViewGift = require('./view_gift');
const Popup = require('../popup');

class ViewGifts extends ViewBase {
    constructor(arg){
        super(arg);
        this._template = template;

        this.on(ViewBase.EVENT_RENDER, ()=>{
            this._elCont = this.getEl().querySelector('.js-gifts-cont');
            this.renderGifts();
        });

        this._domEvents = {
            'click .js-show-more': (e)=>{
                e.preventDefault();
                this.getEl().classList.toggle(ViewGifts.CLASS_SHOW);
            }
        };
    }

    renderGifts () {
        if (this._tplData['list'].length) {
            foreach(this._tplData['list'], (item)=>{
                let View = new ViewGift();
                item['disable'] = false;
                item['needPoints'] = 0;
                item['picFull'] = item.pic_full || item.thumbs.url_250x250;
                item['pointsText'] = 'балл' + ViewBase.getNumEnding(item['points'], ['', 'а', 'ов']);
                if (this._tplData['points'] - item['points'] < 0) {
                    let points = Math.abs(this._tplData['points'] - item['points']);
                    item['disable'] = true;
                    item['needPoints'] = points;
                    item['needPointsText'] = 'балл' + ViewBase.getNumEnding(points, ['', 'а', 'ов']);
                }
                View.setData(item);
                View.on(ViewGift.EVENT_GET, (data)=>{this.emit(ViewGifts.EVENT_GET, data)});
                this._elCont.appendChild(View.render().getEl());
            });
            this.getEl().style.display = 'block';
            this.initSlick();
        } else {
            this.getEl().style.display = 'none';
        }
    }

    initSlick() {
        if (this._tplData['list']) {
            var $el = $(this.getEl())
                .find('.bns_gift_slide');

            if ($el.length) {
                $el.slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    slide: '.bns_gift_item',
                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                });
            }
        }
    }

    // enable () {
    //     this.initSlick();
    //     super.enable();
    // }
}

ViewGifts.EVENT_GET = 'view.gifts.get';
ViewGifts.CLASS_SHOW = 'show-view-more';

module.exports = ViewGifts;