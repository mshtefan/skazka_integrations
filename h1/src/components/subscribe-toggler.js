let sp = require('@lib/sp');
import { Dialog } from '@lib/dialog';
import __jquery__ from 'jquery';

class SubscribeToggled extends Dialog {
    init(toggle_data) {
        this.$template = __jquery__(require('@templates/subscribe_toggled.html'));
        this.preventClose(false);
        this.texts = ko.observable(sp.config().partner.loyalty_page_config.texts);
        this.unsubscribed = toggle_data;  
    }
}

class SubscribeTogglerView {
    constructor() {
        this.tags = ko.observable();
        this.texts = ko.observable();
        this.subscribed = ko.observable();
        this.unsubscribed = ko.observable();
        this.holder = false;

        sp.config.subscribe(data => {
            this.texts(data.partner.loyalty_page_config.texts);
        })

        sp.tags.subscribe(data => {
            if (data) {
                this.subscribed(ko.utils.arrayFirst(data, item => item.tag == sp.config().partner.loyalty_page_config.subscribe_tag))
                this.unsubscribed(ko.utils.arrayFirst(data, item => item.tag == sp.config().partner.loyalty_page_config.unsubscribe_tag))
                this.tags(data)
            }
        })

    }

    toggle(data, event) {
        event.preventDefault()
        if (this.holder) return false
        this.holder = true;
        let remove = sp.config().partner.loyalty_page_config[this.unsubscribed() ? 'unsubscribe_tag' : 'subscribe_tag']
        let add = sp.config().partner.loyalty_page_config[this.unsubscribed() ? 'subscribe_tag' : 'unsubscribe_tag']
        sp.tagsDelete({ tags: remove }).then(() => { sp.tagsAdd({ tags: add }).then(() => { new SubscribeToggled(this.unsubscribed)}).then(() => { this.holder = false }) })
    }

}

module.exports = {
    viewModel: SubscribeTogglerView,
    template: require('@templates/subscribe-toggler.html')
};