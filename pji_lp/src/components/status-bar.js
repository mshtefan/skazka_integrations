import {
    subscribe
} from '../messager';

class statusBarView {
    constructor() {
        this.points = ko.observable();
        this.status_points = ko.observableArray();

        subscribe(data => {
            this.points(data.user_points.confirmed)
        }, 'load.user.info');

        subscribe(config => {
            this.status_points(config.config.status_points);
        }, 'config.load')

        this.fill = ko.computed(() => {
            return `${this.points() / 40 * 100}%`;
        })
    }
}

module.exports = {
    viewModel: statusBarView,
    template: require('@templates/status-bar.html')
}
