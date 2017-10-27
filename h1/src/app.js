import './styles/app.styl';
import ko from 'knockout';
import jQuery from 'jquery';
jQuery.noConflict();

window.ko = ko;

class MainView {
    constructor(options) {
        this.auth_hash = options.auth_hash
    }
}

for (let component of [
        'profile',
        'status',
        'status-bar',
        'questions',
        'banner',
        'history'
    ]) {
    ko.components.register(`sailplay-${component}`, require(`./components/${component}`))
}

let auth_hash = 'a04986fc79c818e7aef48ffa2ea351909f7e00b2';

ko.components.register('sailplay-magic', {
    viewModel: {
        createViewModel: () => {
            return new MainView({
                auth_hash: auth_hash
            })
        }
    },
    template: require('@templates/magic.html')
});

ko.applyBindings();