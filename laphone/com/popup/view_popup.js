'use strict';

/**
 * Dependencies
 */
const ViewBase = require('../base/view');
const template = require('./tpl_popup.hbs');

class ViewPopup extends ViewBase {
    constructor(){
        super();
        this._template = template;
        this._blockContent = null;
        this._blockTitle = null;

        this.on(ViewBase.EVENT_RENDER, function () {
            this._blockContent = this.getEl().querySelector('.js-content');
            this._blockTitle = this.getEl().querySelector('.js-title');
        }, this);

        this._domEvents = {
            'click .bns_close' : (e)=>{e.preventDefault(); this.close();},
            'click' : '_close'
        };
    }

    setContent(View) {
        this.getEl().textContent = '';
        this.getEl().appendChild(View.getEl());
        return this;
    }

    show(opt) {
        var pos = $(window).scrollTop() + 40 + (opt && opt.top || 0);
        var inner = this.getEl().querySelector('.js-inner-block');

        if (inner) {
            inner.style.top = pos+'px';

            if (opt && opt.width) {
                inner.style.width = opt.width+'px';
            } else {
                inner.style.width = '600px';
            }
        }

        $(this.getEl()).fadeIn();
        this.emit(ViewPopup.EVENT_OPEN);
        return this;
    }

    _close(e) {
        if ($(e.target).closest('.js-content').length == 0) {
            e.preventDefault();
            this.close();
        }
    }

    close() {
        $(this.getEl()).fadeOut();
        this.emit(ViewPopup.EVENT_CLOSE);
        $(this.getEl()).find('input[type="checkbox"]').prop("checked", false);
        $(this.getEl()).find('.bns_over_bottom .bns_bay').addClass('bns_disable');
        return this;
    }

    setTitle(title) {
        return this;
    }
}

ViewPopup.EVENT_CLOSE = 'view.popup.close';
ViewPopup.EVENT_OPEN = 'view.popup.open';

module.exports = ViewPopup;