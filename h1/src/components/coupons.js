import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import { Dialog } from '@lib/dialog';

let sp = require('@lib/sp')

class CouponRedeemed extends Dialog {
    init(coupon_data) {
        this.$template = $(require('@templates/coupon_redeemed.html'));
        this.coupon = coupon_data;
    }
}

class CoupunsView {
    constructor(params) {
        this.coupons = ko.observableArray();

        sp.config.subscribe(() => {
            sp.getGifts()
                .then(data => {
                    this.coupons(ko.utils.arrayFilter(data.gifts, item => {
                        return item.type == 'coupon'
                    }))

                    setTimeout(this.initOwl, 50)
                })
        })
    }

    redeemCoupon(coupon) {
        sp.purchaseGift(coupon)
            .then(result => {
                if (result.status == 'ok') {
                    new CouponRedeemed(result);
                }
            })
    }

    initOwl() {
        $(document).ready(() => {
            $('.__sailplay-owl-carousel').owlCarousel({
                items: 1,
                loop: false,
                nav: true,
                dots: true,
                refreshClass: '__sailplay-owl-refresh',
                loadedClass: '__sailplay-owl-loaded',
                loadingClass: '__sailplay-owl-loading',
                rtlClass: '__sailplay-owl-rtl',
                navContainerClass: '__sailplay-owl-nav',
                responsiveClass: '__sailplay-owl-responsive',
                dragClass: '__sailplay-owl-drag',
                itemClass: '__sailplay-owl-item',
                stageClass: '__sailplay-owl-stage',
                stageOuterClass: '__sailplay-owl-stage-outer',
                grabClass: '__sailplay-owl-grab',
                navClass: ['__sailplay-owl-prev', '__sailplay-owl-next'],
                dotClass: '__sailplay-owl-dot',
                dotsClass: '__sailplay-owl-dots',
                navText: ['', '']
            });
        })
    }
}

module.exports = {
    viewModel: params => new CoupunsView(params),
    template: require('@templates/coupons.html')
};