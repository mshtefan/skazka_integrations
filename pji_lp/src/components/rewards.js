import 'owl.carousel/dist/assets/owl.carousel.css';
import '../../imports-loader?jQuery=jquery!owl.carousel';
import {
    subscribe
} from '../messager';

jQuery.noConflict();

class rewardsView {
    constructor() {
        this.gifts = ko.observableArray();

        subscribe(gifts => {
            this.gifts(gifts);
            this.init_owl()
        }, 'gifts.list.success')
    }

    init_owl() {
        jQuery('.__sailplay-owl-carousel').owlCarousel({
            stagePadding: 40,
            margin: 20,
            loop: true,
            items: 4,
            refreshClass: '__sailplay-owl-refresh',
            loadedClass: '__sailplay-owl-loaded',
            loadingClass: '__sailplay-owl-loading',
            rtlClass: '__sailplay-owl-rtl',
            responsiveClass: '__sailplay-owl-responsive',
            dragClass: '__sailplay-owl-drag',
            itemClass: '__sailplay-owl-item',
            stageClass: '__sailplay-owl-stage',
            stageOuterClass: '__sailplay-owl-stage-outer',
            grabClass: '__sailplay-owl-grab',
            navClass: ['__sailplay-owl-prev', '__sailplay-owl-next'],
            navText: ['', '']
        });
    }
}

module.exports = {
    viewModel: rewardsView,
    template: require('@templates/rewards.html')
}