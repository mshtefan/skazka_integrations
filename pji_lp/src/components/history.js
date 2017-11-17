import {
    subscribe
} from '../messager';

class historyView {
    constructor() {
        this.history = ko.observableArray();
        this.history_filtered = ko.computed(() => {
            return ko.utils.arrayFilter(this.history(), item => item.action == 'purchase')
        })

        subscribe(data => {
            this.history(data);
        }, 'load.user.history')
    }

    getDate(date) {
        let d = new Date(date);
        return `${d.getMonth()+1}/${d.getDate()}/${(d.getYear() + '').slice(-2)}`
    }
}

module.exports = {
    viewModel: historyView,
    template: require('@templates/history.html')
}