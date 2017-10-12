'use strict';

/**
 * Dependencies
 */
const ViewBase = require('../base/view');
const template = require('./tpl_badges.hbs');

class ViewBadges extends ViewBase {
    constructor(arg) {
        super(arg);
        this._template = template;
        this._domEvents = {
            'click .js-open-badges-popup': this._showPopupBadges
        }
    }

    _prepareTplData () {
        super._prepareTplData();
        let res = 0;

        if (this._tplData.list.length) {
            let currentStatus = this._tplData.level;
            this._tplData['statusPic'] = currentStatus.thumbs.url_100x100;
            this._tplData['status'] = currentStatus.name;

            this._tplData['valueToNextStatus'] = this._tplData['nextLevelPoints'] - this._tplData['purchasesValue'];
            this._tplData['valueToNextStatusText'] = 'рубл' + ViewBase.getNumEnding(this._tplData['valueToNextStatus'], ['ь', 'я', 'ей']);
        }

        return this._tplData;
    }

    updateProgress (cost) {
        if (!$('#circle').length) return;

        const value = cost !== 0 ? cost / this._tplData['lastValuePoints'] : 0;

        setTimeout(()=>{
            $('#circle').circleProgress({
                value: value,
                size: 108,
                fill: { color: "#03f709" },
                startAngle: -1.6
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('strong').html(Math.round(100 * stepValue) + '%');
            });
        },300);
    }

    _showPopupBadges(e) {
        e.preventDefault();
        this.emit(ViewBadges.EVENT_POPUP_BADGES);
    }
}

ViewBadges.EVENT_POPUP_BADGES = 'view.badges.popup-badges';
ViewBadges.EVENT_MOVE_TO_TASKS = 'view.badges.move-to-task';


module.exports = ViewBadges;