import './styles/app.styl';
import ko from 'knockout';
import 'knockout-mapping';
import jQuery from 'jquery';
jQuery.noConflict();

window.ko = ko;
let sp = require('@lib/sp');


class MainView {
    constructor(options) {
        sp.init(options);
        
        sp.config.subscribe(() => {
            sp.getUserInfo();
        })
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

ko.components.register('sailplay-magic', {
    viewModel: {
        createViewModel: () => {
            return new MainView({
                auth_hash: 'a04986fc79c818e7aef48ffa2ea351909f7e00b2'
            })
        }
    },
    template: require('@templates/magic.html')
});

ko.applyBindings();