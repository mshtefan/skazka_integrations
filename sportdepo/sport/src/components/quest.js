import ko from 'knockout';
import sailplay from 'sailplay-hub';
import 'sailplay-hub-actions';
import 'jquery';

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
            if(!action.socialType) {
                sailplay.send('actions.perform', action)
            }
        }

        this.openProfile = () => {
            messager.publish(null, 'open_profile')
        }

        this.verifyEmail = () => {
            location.href = '/personal/#settings';
            location.reload();
        }


        $('body').on('mouseenter', '.bns_qust_item', function() {
            $(this).addClass('type_hovered');
         }).on('mouseleave', '.bns_qust_item', function() {
            $(this).removeClass('type_hovered');
         }).on('hover', '.bns_qust_item iframe', function() {
            $(this).parents('.bns_qust_item').addClass('type_hovered');
         });

        this.onMouseEnter = (action, e) => {
            let isIframe = e.target.tagName == 'IFRAME';
            let button = e.target.parentElement;
            if(!isIframe) {
                button = e && e.target && e.target.getElementsByClassName && e.target.getElementsByClassName('bns_social_iframe')[0];
            }
            if(action.socialType && button && !button.classList.contains('parsed')) {
                button.classList.add('parsed');
                sailplay.actions.parse(button, action)
            }
        }

        sailplay.on('actions.perform.success', data => {
            setTimeout(() => {
                messager.publish(this.config, 'init');            
            }, 500)
        })  

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