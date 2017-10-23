import './ko-adapter';
import './css/style.styl';
import {
    SailPlay
} from './core';
import {
    subscrib,
    publish
} from './messager'

class MainView {
    constructor(opts) {
        if (!opts.auth_hash) {
            throw new Error('Please specify user auth_hash')
        }

        this.partner_id = opts.partner_id || 1761;
        this.auth_hash = opts.auth_hash;
        this.domain = opts.domain || 'https://sailplay.net';
        this.sp = new SailPlay({
            partner_id: this.partner_id,
            domain: this.domain,
            auth_hash: this.auth_hash
        })

        this.sp.config.subscribe(() => {
            this.getData()
        })
    }

    getData() {
        this.sp.getGifts().then(data => publish(data.gifts, 'gifts.list.success'));
        this.sp.getActions().then(data => publish(data.data.actions, 'actions.list.success'));
    }
}

ko.virtualElements.allowedBindings.fadeVisible = true;
ko.components.register('status-bar', require('./components/status-bar'))
ko.components.register('rewards', require('./components/rewards'))
ko.components.register('actions', require('./components/actions'))
ko.components.register('popup', require('./components/popup'))


window.SAILPLAY = function (opts = {}) {
    ko.components.register(opts.element || 'sailplay-magic', {
        viewModel: {
            createViewModel: () => {
                return new MainView(opts)
            }
        },
        template: require('@templates/main.html')
    });


    ko.applyBindings()
}

window.SAILPLAY({
    auth_hash: '99e3b05b2aff3fd576b1e94021e603c260e062eb'
})