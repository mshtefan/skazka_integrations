let sp = require('@lib/sp');

class StatusBarView {
    constructor() {
        this.user = ko.observable();
        this.user_status = ko.observable();
        this.statuses = ko.observableArray();
        this.collected = ko.observable(0);
        this.collected_on_bar = ko.observable(0)
        this.collected_date = ko.observable();
        this.night_counter = ko.observable();
        this.next_status = ko.observable();

        this.nightsExpire = ko.computed(() => {
            let year = new Date();
            year = new Date(year.getFullYear() + 1, year.getMonth(), year.getDate());

            let diff = year.getTime() - new Date(this.collected_date()).getTime()
            return new Date(new Date().getTime() + diff)
        })

        this.template = ko.pureComputed(() => {
            if (this.collected() == 0 && !this.currentStatusDetail())
                return `Start collecting night to become a ${this.next_status().name} member`

            let date = this.nightsExpire();
            date = `${date.toLocaleString('en-us', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`

            if (this.currentStatusDetail().grade == 2)
                if (this.collected() >= this.next_status().nights)
                    return `You will retain Gold status after ${date}`;
                else
                    return `Collect <strong>${this.next_status().nights - this.collected()}</strong> nights by ${date} to retain <strong>${this.currentStatusDetail().name}</strong> member.?`

            return `Collect <strong>${this.next_status().nights - this.collected()}</strong> nights by ${date} to become a <strong>${this.next_status().name}</strong> member.`
        })

        sp.user.subscribe(data => {
            if (!data) {
                this.user(0);
                this.user_status(0);
                return
            }

            this.user(data.user);
            this.user_status(data.user_status.name())
        });

        this.next_status = ko.computed(() => {
            if (!this.currentStatusDetail())
                return this.statuses()[0]
            if (this.currentStatusDetail().grade == 1)
                return this.statuses()[1]
            if (this.currentStatusDetail().grade == 2)
                return {
                    nights: this.currentStatusDetail().nights_to_stay,
                    name: this.statuses()[1].name
                }
        })

        sp.config.subscribe(data => {
            this.statuses(data.partner.loyalty_page_config.statuses);
            this.night_counter(data.partner.loyalty_page_config.night_counter_tag);
        })

        this.since = ko.pureComputed(() => {
            if (!this.user()) return ''

            let date = new Date(this.user().register_date())
            return `${date.toLocaleString('en-us', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
        });

        sp.tags.subscribe(data => {
            if (this.night_counter) {
                let counter = ko.utils.arrayFirst(data, item => {
                    return item.tag == this.night_counter()
                })

                if (counter) {
                    // counter.calculated_value
                    let value = counter.calculated_value;
                    this.collected(value)

                    if (!this.currentStatusDetail())
                        this.collected_on_bar(this.collected())
                    else if (this.currentStatusDetail().grade == 1)
                        this.collected_on_bar(this.collected() + this.currentStatusDetail().nights)
                    else if (this.currentStatusDetail().grade == 2)
                        this.collected_on_bar(this.statuses()[0].nights + this.currentStatusDetail().nights)
                    this.collected_date(counter.create_date)
                }
            }
        })
    }

    currentStatusDetail() {
        let status = this.user_status();
        return ko.utils.arrayFirst(this.statuses(), item => {
            return item.name == status
        })
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