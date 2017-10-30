let sp = require('@lib/sp')

class StatusView {
    constructor() {
        this.statusBadge = ko.observable();
        this.statusName = ko.observable();

        sp.user.subscribe(data => {
            this.statusBadge(data.user_status.pic())
            this.statusName(data.user_status.name())
        })
    }
}

module.exports = {
    viewModel: StatusView,
    template: require('@templates/status.html')
};