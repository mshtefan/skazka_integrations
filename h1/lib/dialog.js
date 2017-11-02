export class Dialog {
    constructor(options) {
        this.preventClose = ko.observable(true);

        if (this.init) this.init(options)
        else 
            throw new Error('You need to implement init() method')

        this.$template.appendTo('body')
        $('body').addClass('__sailplay-no-scroll');

        setTimeout(() => {
            this.$template.attr('aria-hidden', false)
            this.$template.closest('.__sailplay-dialog__shadow').css('opacity', 1);
            this.$template.find('.__sailplay-dialog')
                .css('opacity', 1)
                .css('-webkit-transform', 'translateY(0)')
                .css('-moz-transform', 'translateY(0)')
                .css('-ms-transform', 'translateY(0)')
                .css('-o-transform', 'translateY(0)')
                .css('transform', 'translateY(0)')
        }, 50)

        ko.applyBindings(this, this.$template[0])
    }

    close(obj, ev) {
        if (this.preventClose() || obj !== true && ev && !/shadow/.test(ev.target.className))
            return true

        $('body').removeClass('__sailplay-no-scroll');
        this.$template.closest('.__sailplay-dialog__shadow').css('opacity', 0);
        this.$template.find('.__sailplay-dialog')
            .css('opacity', 0)
            .css('-webkit-transform', 'translateY(-50px)')
            .css('-moz-transform', 'translateY(-50px)')
            .css('-ms-transform', 'translateY(-50px)')
            .css('-o-transform', 'translateY(-50px)')
            .css('transform', 'translateY(-50px)')

        setTimeout(() => {
            this.$template.remove()
        }, 200)
    }
}