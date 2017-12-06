class BannerView {
    constructor(params) {
        this.background = ko.observable(params.image);
        this.backgroundColor = ko.observable(params.color);
    }

    getBackground() {
        if (!this.background()) return null
        return `url(${this.background()() || ''})`;
    }

    getBackgroundColor() {
        return this.backgroundColor() || '#f9f9f9';
    }
}

module.exports = {
    viewModel: params => new BannerView(params),
    template: require('@templates/banner.html')
};