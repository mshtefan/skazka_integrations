class StatusBarView {
    constructor() {
        this.nights = {}
    }
}

module.exports = {
    viewModel: StatusBarView,
    template: require('@templates/status-bar.html')
};