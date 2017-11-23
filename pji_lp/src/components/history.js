import {
    subscribe
} from '../messager';

class historyView {
    constructor() {
        this.history = ko.observableArray();
        this.history_filtered = ko.computed(() => {
            return ko.utils.arrayFilter(this.history(), item => ['purchase', 'gift_purchase'].indexOf(item.action) > -1);
        })

        this.user = ko.observable();

        subscribe(data => {
            this.history(data);
        }, 'load.user.history');

        subscribe(data => {
            this.user(data)
        }, 'load.user.info')
    }

    getDate(date) {
        let d = new Date(date);
        return `${d.getMonth()+1}/${d.getDate()}/${(d.getYear() + '').slice(-2)}`
    }

    getBalance(index) {
        return this.history_filtered().reduce((prev, current, _index) => {
            if (index() >= _index)
                    return prev + parseInt(current.points_delta * -1);
                else return prev
            },
            this.user().user_points.confirmed
        )
    }
}

module.exports = {
    viewModel: historyView,
    template: require('@templates/history.html')
}