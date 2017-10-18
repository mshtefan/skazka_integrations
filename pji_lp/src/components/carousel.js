import 'owl.carousel/dist/assets/owl.carousel.css';
import '../../imports-loader?jQuery=jquery!owl.carousel';

class carouselView {
    constructor() {
        jQuery(document).ready(() => {
            jQuery('.__sailplay-owl-carousel').owlCarousel({
                stagePadding: 20,
                refreshClass: '__sailplay-owl-refresh',
                loadedClass: '__sailplay-owl-loaded',
                loadingClass: '__sailplay-owl-loading',
                rtlClass: '__sailplay-owl-rtl',
                responsiveClass: '__sailplay-owl-responsive',
                dragClass: '__sailplay-owl-drag',
                itemClass: '__sailplay-owl-item',
                stageClass: '__sailplay-owl-stage',
                stageOuterClass: '__sailplay-owl-stage-outer',
                grabClass: '__sailplay-owl-grab'
            });
        })        
    }
}

module.exports = {
    viewModel: carouselView,
    template: require('@templates/carousel.html')
}