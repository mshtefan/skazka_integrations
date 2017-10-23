import {
    subscribe
} from '../messager';

class actionsView {
    constructor() {
        this.actions = ko.observableArray();

        subscribe(actions => {
            this.actions(actions)
        }, 'actions.list.success');

        this.titles = ko.observable({
            fb: 'Join us on facebook',
            tw: 'Share of twitter',
            invite: 'Refer a friend',
            survey: 'Complete a survey'
        })
    }

    getTitle(act) {
        if (act.socialType == 'tw') return this.titles()['tw']
        if (act.socialType == 'fb') return this.titles()['fb']
        if (act.type == 'inviteFriend') return this.titles()['invite']
    }
}

module.exports = {
    viewModel: actionsView,
    template: require('@templates/actions.html')
}