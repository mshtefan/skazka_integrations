import {
    subscribe
} from '../messager';

class statusBarView {
    constructor() {
        this.points = ko.observable();

        subscribe(data => {
            this.points(data.user_points.confirmed)
        }, 'load.user.info');

        this.fill = ko.computed(() => {
            return `${this.points() / 40 * 100}%`;
        })
    }
}

module.exports = {
    viewModel: statusBarView,
    template: require('@templates/status-bar.html')
}
