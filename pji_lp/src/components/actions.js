import {
    subscribe,
    subscribeAll,
    publish
} from '../messager';
import $ from 'jquery';

class actionsView {
    constructor() {
        this.actions = ko.observableArray();
        this.start_invite = ko.observable();
        this.start_survey = ko.observable();
        this.current_survey = ko.observable();
        this.current_action = ko.observable();
        this.current_survey_result = ko.observable();
        this.close_invite_popup = this.close_invite_popup.bind(this);

        subscribeAll(result => {
            const flatten = list => list.reduce(
                (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
            );

            this.actions(flatten(result).sort((a, b) => {
                if (a.type == 'poll') return -1;
                if (b.type == 'poll') return 1;
            }))

        }, ['actions.list.success', 'custom_actions.list.success'])

        subscribe(result => {
            this.refer_link = result;
        }, 'referral.info')

        this.titles = ko.observable({
            fb: 'Join us on facebook',
            tw: 'Share of twitter',
            invite: 'Refer a friend',
            survey: 'Complete a survey'
        })
    }

    perform(act) {
        this.start_invite(0);
        this.start_survey(0);
        this.current_action(act);

        if (act.type == 'inviteFriend') {
            this.start_invite(1);
        } else if (act.type == 'poll') {
            this.current_survey(act);
            this.start_survey(1);
        } else {
            publish(ko.mapping.toJS(act), 'action.perform');
        }
    }

    completePoll(act) {

        let tags = [];
        let customVars = {};

        for (let question of act.content.questions()) {
            tags = tags.concat(question.result())

            if (question.options().slice(-1)[0].value.type() == 'custom') {
                customVars[question.options().slice(-1)[0].value.custom_var()] = question.options().slice(-1)[0].value.value()
            }
        }

        publish([tags, customVars, act.id()], 'poll.complete');
    }

    close_invite_popup() {
        this.start_invite(0);
        this.start_survey(0);
        jQuery('.__sailplay-gift__redeem-active').removeClass('__sailplay-gift__redeem-active');
    }

    copy_refer_link() {
        $('.__sailplay-refer-input').select();
        document.execCommand('copy')
    }

    getTitle(act) {
        if (act.type == 'poll') return this.titles()['survey'];
        else if (act.type == 'inviteFriend') return this.titles()['invite'];
        else if (act.socialType == 'tw') return this.titles()['tw'];
        else if (act.socialType == 'fb') return this.titles()['fb'];
        else return ''
    }
}

module.exports = {
    viewModel: actionsView,
    template: require('@templates/actions.html')
}