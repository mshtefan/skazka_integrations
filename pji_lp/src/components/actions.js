import {
    subscribe
} from '../messager';

class actionsView {
    constructor() {
        this.actions = ko.observableArray();

        subscribe(actions => {
            this.actions(actions)
        }, 'actions.list.success')
    }
}

module.exports = {
    viewModel: actionsView,
    template: require('@templates/actions.html')
}