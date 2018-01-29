'use strict';

/**
 * Dependencies
 */
const ViewBase = require('../base/view');
const template = require('./tpl_badges_popup.hbs');

class ViewPopupBadge extends ViewBase {
    constructor(arg){
        super(arg);
        this._template = template;
        this._domEvents = {
            'click .js-close-popup': (e)=>{
                e.preventDefault();
                this.emit(ViewPopupBadge.EVENT_POPUP_CLOSE);
            }
        }
    }

    _showMore (e) {
        e.preventDefault();
        e.target.parentNode.querySelector('.bns_oa_desc_text').classList.toggle('act');

        if(e.target.parentNode.querySelector('.bns_oa_desc_text').classList.contains('act')){
            e.target.textContent = 'Скрыть описание';
        } else  {
            e.target.textContent = 'Полное описание';
        }
    }

    _selectBadge(e) {
        e.preventDefault();
        this.selectBadge(e.target.parentNode);
    }

    selectBadge(badge) {
        let cont = this.getEl().querySelector('.bns_ovar_achiv_left');
        let selected = cont.querySelector('.js-badge.act');
        let id = badge.getAttribute('data-id');
        let rightBlock = this.getEl().querySelector('.bns_over_achiv_right');

        this._selectedBadge = id;

        if (selected) {
            selected.classList.remove('act');
        }

        rightBlock.querySelector('.bns_oa_desc_head img').src = this._tplData.entriesById[id].icon;
        rightBlock.querySelector('.bns_oa_desc_head strong').textContent = this._tplData.entriesById[id].name;
        rightBlock.querySelector('.bns_oa_desc_text').textContent = this._tplData.entriesById[id].desc;
        rightBlock.classList.add('act');

        badge.classList.add('act');

        this._enableShareBadge(id);
    }

    _prepareTplData () {
        super._prepareTplData();
        const countInCol = parseInt(this._tplData.list.length/2, 10);

        this._tplData['entriesCol1'] = this._tplData.list.slice(0, countInCol);
        this._tplData['entriesCol2'] = this._tplData.list.slice(countInCol);

        return this._tplData;
    }

    _enableShareBadge(e) {
        let cont = document.querySelector('.bns_achiv_social'),
            els = cont.querySelectorAll('a'),
            i=0, l=els.length, f=false;

        let index = this._tplData.entriesById[this._selectedBadge].index;
        cont.style.display = 'block';

        for (;i<l;i++) {
            if (this._tplData.list[index].actions && this._tplData.list[index].actions[els[i].getAttribute('data-action')]) {
                SAILPLAY.actions.parse(els[i].children[0], this._tplData.list[index].actions[els[i].getAttribute('data-action')]);
                f=true;
            }
        }
        if (!f) {
            cont.style.display = 'none';
        }
    }

}

ViewPopupBadge.EVENT_POPUP_CLOSE = 'view.popup-badges.popup-close';

module.exports = ViewPopupBadge;