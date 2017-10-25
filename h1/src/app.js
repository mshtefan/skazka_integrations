import './styles/app.styl';
import ko from 'knockout';
window.ko = ko;

class MainView {
    constructor() {

    }
}

for (let component of [
    'profile',
    'status',
    'questions',
    'banner'
]) {
    ko.components.register(`sailplay-${component}`, require(`./components/${component}`))
}

ko.components.register('sailplay-magic', {
    viewModel: {
        createViewModel: () => {
            return new MainView()
        }
    },
    template: require('@templates/magic.html')
});

ko.applyBindings();