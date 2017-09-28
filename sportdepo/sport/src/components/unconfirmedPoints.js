import ko from 'knockout';
import sailplay from 'sailplay-hub';

export default function (messager) {
    return function (params) {
        this.opened = false
        this.popupVm = {
            opened: ko.observable(false),
            width: ko.observable('650px'),
            openUb: () => {
                document.body.className += ' no_scrol';
                this.popupVm.opened(true)
            }
        }
    }
}