class BannerView {
    constructor(params) {
        this.background = ko.observable(params.image)
    }

    getBackground() {
        if (!this.background()) return null
        return `url(${this.background() || ''})`;
    }

    getBackgroundColor() {
        return '#f9f9f9'
    }
}

module.exports = {
    viewModel: params => new BannerView(params),
    template: require('@templates/banner.html')
};