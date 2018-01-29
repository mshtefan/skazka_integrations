const Model = require('../base/model');
const API = require('../base/api');

class ModelBadges extends Model {

    constructor (attr, options) {
        super(attr, options);
        this.on(Model.EVENT_CHANGE, (arg)=>{
            if (arg.key == 'purchasesValue' || arg.key == 'list') {
                this._calcLevel();
                this._getLastValue();
            }
        });
    }

    _defaults() {
        return {
            list: [],
            level: {},
            purchasesValue: 0,
            pointsValue: 0,
            lastValuePoints: 0,
            nextLevelPoints: 0
        };
    }

    _parse(resp) {
        var list = resp.multilevel_badges[0];

        return {
            list: list
        };
    }

    _calcLevel () {
        const list = this.get('list');
        const points = this.get('purchasesValue');

        for (let i = 0;i<list.length;i++) {
            var next = i+1;
            if (list[next].received_date == null) {
                    list[i].active = true;
                    this.set('level', list[i]);

                    if (list[next] && list[next].rules[0] && list[next].rules[0].value_to_success) {
                        this.set('nextLevelPoints', list[next].rules[0].value_to_success);
                    }

                    return true;
            }
        }
        this.set('nextLevelPoints', list[1]);
    }

    _getLastValue () {
        const list = this.get('list');
        const item = list[list.length-1];

        if (item.rules[0] && item.rules[0].value_to_success) {
            this.set('lastValuePoints', item.rules[0].value_to_success);
            return true;
        }
    }

    fetch () {
        API
            .getBadges()
            .then((resp)=>{
                this.set(resp, {parse: true});
                this.emit(Model.EVENT_FETCH, resp);
            });
    }
}
Object.assign(ModelBadges, Model);

module.exports = ModelBadges;