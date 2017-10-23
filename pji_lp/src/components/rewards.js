import 'owl.carousel/dist/assets/owl.carousel.css';
import '../../imports-loader?jQuery=jquery!owl.carousel';
import {
    subscribe
} from '../messager';

jQuery.noConflict();

class rewardsView {
    constructor() {
        this.gifts = ko.observableArray();
        this.start_redeem = ko.observable(false);
        this.active_gift = ko.observable();
        this.close = this.close.bind(this);

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

        jQuery(document).on('click', '.__sailplay-gift__redeem', event => {
            let index = jQuery(event.currentTarget).parent().data('id');
            this.redeem(index);
        })
    }

    close() {
        this.start_redeem(false)
    }

    redeem(index) {
        this.active_gift(this.gifts()[index])
        this.start_redeem(true);
    }
}

module.exports = {
    viewModel: rewardsView,
    template: require('@templates/rewards.html')
}