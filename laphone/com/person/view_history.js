'use strict';

/**
 * Dependencies
 */
const ViewBase = require('../base/view');
const template = require('./tpl_history.hbs');
const translate = require('./translate');
const foreach = require('lodash.foreach');
const moment = require('moment');

class ViewHistory extends ViewBase {
    constructor() {
        super();
        this._template = template;
        this._domEvents = {
            'click .js-popup-close': (e)=>{
                e.preventDefault();
                this.emit(ViewHistory.EVENT_POPUP_CLOSE);
            },
            'click .js-paging > a': this._changePage
        }
    }

    _prepHistoryName (historyItem){
        switch (historyItem.action) {
            case 'gift_purchase':
                return translate['gift_purchase'] + ': ' + historyItem.name;
            case 'event':
                return historyItem.name || translate['custom_action'];
            case 'extra':
                if (historyItem.points_delta > 0) {
                    return historyItem.name || translate['custom_action'];
                }
                return historyItem.name || translate['custom_action_negative'];

            case 'sharing':
                switch (historyItem.social_action) {
                    case 'like':
                        return translate['enter_group'] + historyItem.social_type;
                    case 'purchase':
                        return translate['share_purchase'] + historyItem.social_type;
                    case 'partner_page':
                        return translate['social_share'] + historyItem.social_type;
                    case 'badge':
                        return translate['share_badge'] + historyItem.social_type;
                }
            case 'badge':
                return translate[historyItem.action] + ' "' + historyItem.name + '"';

            default:
                return translate[historyItem.action];
        }
    }

    _prepareEntries(srcEntries) {
        moment.locale('ru');
        let entries = [];
        foreach(srcEntries, (entry) => {
            entries.push({
                date: moment(entry.action_date).format('DD.MM.YYYY'),
                points: !!entry.points_delta ? ((entry.points_delta > 0 ? '': '') + entry.points_delta) : '',
                name: this._prepHistoryName(entry),
                addClass: entry.points_delta < 0 ? 'bns_bal_min' : ''
            });
        });
        return entries;
    }

    _prepareTplData() {
        let data = {entries: [], pages:[]};
        let entriesPerPage = 5;
        let countPages = Math.ceil(this._tplData.history.length / entriesPerPage);
        this.currentPage = this.currentPage*1 || 1 ;

        let end = this.currentPage * entriesPerPage;
        let start = (this.currentPage - 1) * entriesPerPage;

        data.entries = this._prepareEntries(this._tplData.history.slice(start, end));

        data.pages = false;
        if (this._tplData.history.length > entriesPerPage) {
            data.pages = [];

            if (this.currentPage > 1) {
                data.pagePrev = this.currentPage - 1;
            }

            if (this.currentPage < countPages) {
                data.pageNext = this.currentPage + 1;
            }

            if (countPages > 5) {
                if (this.currentPage > 2) {
                    data.pages.push({page:1, active: false, delimiter: false});
                }
                if (this.currentPage > 3) {
                    data.pages.push({delimiter: true});
                }

                data.pages.push({page:this.currentPage - 1 , active: false, delimiter: false});
                data.pages.push({page:this.currentPage , active: true, delimiter: false});
                if (this.currentPage !== countPages) {
                    data.pages.push({page:this.currentPage + 1, active: false, delimiter: false});
                }

                if (this.currentPage < countPages-2) {
                    data.pages.push({delimiter: true});
                }

                if (this.currentPage < countPages-1) {
                    data.pages.push({page:countPages, active: false, delimiter: false});
                }
            } else {
                for (let i=1;i<=countPages;i++) {
                    data.pages.push({page:i, active: (this.currentPage == i) ? true : false, delimiter: false});
                }
            }
        }
        return data;
    }

    _changePage (e) {
        e.preventDefault();
        e.stopPropagation();
        this.currentPage = e.target.getAttribute('data-page');
        this.render();
    }
}

ViewHistory.EVENT_POPUP_CLOSE = 'view.history.popup-close';

module.exports = ViewHistory;