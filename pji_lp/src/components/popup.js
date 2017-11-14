import {
    subscribe
} from '../messager';

class popupView {
    constructor(params, componentInfo) {
        console.log(params.data.data)
        this.data = params.data.data;
        this._close = params.data.close;
    }

    close(view, event) {
        setTimeout(() => {
            jQuery(event.currentTarget).closest('.__sailplay-popup')
            .removeClass('__sailplay-popup__active')
        })
        
        setTimeout(() => {
            this._close();
        }, 300)
    }

    appear(element) {
        setTimeout(() => {
            jQuery(element[0]).closest('.__sailplay-popup')
            .addClass('__sailplay-popup__active')
        })
    }
}

module.exports = {
    viewModel: popupView,
    template: require('@templates/popup.html')
}