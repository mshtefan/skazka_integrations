let sp = require('@lib/sp');

class StatusBarView {
    constructor() {
        this.user = ko.observable();
        this.user_status = ko.observable();
        this.statuses = ko.observableArray();
        sp.user.subscribe(data => {
            this.user(data.user);
            this.user_status(data.user_status.name())
        })

        sp.config.subscribe(data => {
            this.statuses(data.partner.loyalty_page_config.statuses)
        })

        this.since = ko.pureComputed(() => {
            if (!this.user()) return ''

            let date = new Date(this.user().register_date())
            return `${date.toLocaleString('en-us', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
        });

        this.collected = 15;
    }

    isCheckpoint(night_index) {
        return ko.utils.arrayFirst(this.statuses(), (status, index) => {
            let nights = status.nights;

            if (index > 0) {
                for (let i = 0; i < index; i++) {
                    nights += this.statuses()[i].nights
                }
            }

            return nights == night_index
        })
    }
}

module.exports = {
    viewModel: StatusBarView,
    template: require('@templates/status-bar.html')
};