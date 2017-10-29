let sp = require('@lib/sp');

class StatusBarView {
    constructor() {
        this.user = ko.observable();
        sp.user.subscribe(data => {
            this.user(data.user);
        })

        this.since = ko.pureComputed(() => {
            if (!this.user()) return ''

            let date_split = this.user().register_date().split('-');
            return `${sp.months[parseInt(date_split[1]) - 1]} ${date_split[2]}, ${date_split[0]}`
        });

        this.collected = 12;
        this.nights = [
            {index: 1},
            {index: 2},
            {index: 3},
            {index: 4},
            {index: 5, status: true},
            {index: 6},
            {index: 7},
            {index: 8},
            {index: 9},
            {index: 10},
            {index: 11, status: true},
            {index: 12},
            {index: 13},
            {index: 14},
            {index: 15},
            {index: 16},
            {index: 17},
            {index: 18},
            {index: 19},
            {index: 20},
            {index: 21},
            {index: 22},
            {index: 23},
            {index: 24},
            {index: 25},
            {index: 26, status: true}
        ]
    }
}

module.exports = {
    viewModel: StatusBarView,
    template: require('@templates/status-bar.html')
};