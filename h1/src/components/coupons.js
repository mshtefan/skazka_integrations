import __jquery__ from 'jquery';
import { Dialog } from '@lib/dialog';

__jquery__.noConflict();
// require('owl.carousel');
// require('owl.carousel/dist/assets/owl.carousel.css')
require('imports-loader?jQuery=jquery!slick-carousel');
require('slick-carousel/slick/slick.css');

let sp = require('@lib/sp')

class CouponRedeemed extends Dialog {
    init(coupon_data) {
        this.$template = __jquery__(require('@templates/coupon_redeemed.html'));
        this.preventClose(false);
        this.coupon = coupon_data;
        this.texts = ko.observable();
        this.coupon_header = sp.config().partner.loyalty_page_config.texts.coupon_redeemed_header

        sp.config.subscribe(data => {
            this.texts(data.partner.loyalty_page_config.texts);
        })        
    }
}

class CoupunsView {
    constructor(params) {
        this.coupons = ko.observableArray();
        this.user_points = ko.observable();
        this.user_currency = ko.observable();
        this.texts = ko.observable();
        this.filtered_coupons = ko.computed(() => {
            return ko.utils.arrayFilter(this.coupons(), item => {
                return item.type == 'coupon' && item.category == (this.user_currency() || '786')
            })
        })

        sp.config.subscribe(data => {
            this.texts(data.partner.loyalty_page_config.texts);
        })

        sp.user.subscribe(data => {
            if (!data) return

            this.user_points(sp.user().user_points.confirmed());
            sp.getGifts()
                .then(data => {
                    ko.utils.arrayForEach(sp.custom_variables(), item => {
                        switch (item.name) {
                            case 'Currency':
                                this.user_currency(item.value)
                                break;
                        }
                    })

                    this.coupons(data.gifts)
                    setTimeout(params.no_owl ? this.initNative : this.initOwl, 50)
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

    initNative() {
        __jquery__(document).ready(() => {
            __jquery__('.__sailplay-owl-carousel')
                .removeClass('__sailplay-owl-carousel')
                .addClass('__sailplay-owl-native')
        })
    }

    initOwl() {
        __jquery__(document).ready(() => {
            __jquery__('.__sailplay-owl-carousel').slick({
                prevArrow: '.__sailplay-slick-prev',
                nextArrow: '.__sailplay-slick-next',
            });

            // __jquery__('.__sailplay-owl-carousel').find('.__sailplay-owl-stage-outer').remove();
            // __jquery__('.__sailplay-owl-carousel').find('.__sailplay-owl-nav').remove()
            // __jquery__('.__sailplay-owl-carousel').find('.__sailplay-owl-dots').remove()

            // __jquery__('.__sailplay-owl-carousel').trigger('destroy.owl.carousel');
            // __jquery__('.__sailplay-owl-carousel').owlCarousel({
            //     items: 1,
            //     loop: false,
            //     nav: true,
            //     dots: true,
            //     refreshClass: '__sailplay-owl-refresh',
            //     loadedClass: '__sailplay-owl-loaded',
            //     loadingClass: '__sailplay-owl-loading',
            //     rtlClass: '__sailplay-owl-rtl',
            //     navContainerClass: '__sailplay-owl-nav',
            //     responsiveClass: '__sailplay-owl-responsive',
            //     dragClass: '__sailplay-owl-drag',
            //     itemClass: '__sailplay-owl-item',
            //     stageClass: '__sailplay-owl-stage',
            //     stageOuterClass: '__sailplay-owl-stage-outer',
            //     grabClass: '__sailplay-owl-grab',
            //     navClass: ['__sailplay-owl-prev', '__sailplay-owl-next'],
            //     dotClass: '__sailplay-owl-dot',
            //     dotsClass: '__sailplay-owl-dots',
            //     navText: ['', '']
            // });
        })
    }
}

module.exports = {
    viewModel: params => new CoupunsView(params),
    template: require('@templates/coupons.html')
};