import './ko-adapter';
import './css/style.styl';

class MainView {
    constructor() {
        this.first_name = ko.observable();
    }
}

ko.components.register('status-bar', require('./components/status-bar'))
ko.components.register('carousel', require('./components/carousel'))

ko.components.register('sailplay-magic', {
    viewModel: MainView,
    template: require('@templates/main.html')
})

ko.applyBindings(new MainView())