import ko from 'knockout';
import sailplay from 'sailplay-hub';
import 'sailplay-hub-actions';

export default function(messager) {
    return function (params) {
        this.actions = ko.observableArray([])
        this.profile_not_filled = ko.observable(true);
        this.email_not_verified = ko.observable(true);
        this.isAction = (action, name) => {
            if (action.action) return action.action == name
            else return action.type == name
        }

        this.perform = action => {
            sailplay.send('actions.perform', action)
        }

        this.openProfile = () => {
            messager.publish(null, 'open_profile')
        }

        this.verifyEmail = () => {
            location.href = '/personal/#settings'
        }

        sailplay.on('actions.perform.complete', data => {
            setTimeout(() => {
                messager.publish(this.config, 'init');            
            }, 500)
        })  
      
        messager.subscribe('profile_filled', () => {
            this.profile_not_filled(false);
        })

        messager.subscribe('email_verified', () => {
            this.email_not_verified(false);
        })

        messager.subscribe('actions_update', () => {
            sailplay.send('load.actions.list')
            sailplay.on('load.actions.list.success', data => {
                this.actions(data.actions)
            })
        })

        messager.subscribe('init', config => {
            this.config = config;
            sailplay.send('load.actions.list')
            sailplay.on('load.actions.list.success', data => {
                this.actions(data.actions)
            })
        })
    }
}