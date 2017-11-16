import {
    subscribe
} from '../messager';

class historyView {
    constructor() {
        this.history = ko.observableArray();

        subscribe(data => {
            this.history(data)
        }, 'load.user.history')
    }
}

module.exports = {
    viewModel: historyView,
    template: require('@templates/history.html')
}