import './styles/app.styl';
import ko from 'knockout';
import 'knockout.validation';
import jQuery from 'jquery';
import { Dialog } from '@lib/dialog';
import cookie from 'js.cookie'
jQuery.noConflict();

ko.mapping = require('knockout.mapping')
window.ko = ko;
let sp = require('@lib/sp');

class Login extends Dialog {
    init(redirect) {
        this.$template = $(require('@templates/login.html'));
        sp.redirect = 1;

        let params = {
            background: 'transparent',
            partner_id: 1781,
            css_link: sp.config().partner.loyalty_page_config.auth_form_css,
            disabled_options: 'agreement',
            texts: JSON.stringify({
                'email_placeholder': ' ',
                'password_placeholder': ' ',
                'login': 'Sign In'
            })
        }

        let params_string = '';
        for (var key in params) {
            if (params_string != "") {
                params_string += "&";
            }
            params_string += key + "=" + encodeURIComponent(params[key]);
        }

        this.login_uri = ko.observable('https://sailplay.net/users/auth-page?' + params_string);
        window.addEventListener('message', this.onMessage, false)
        sp.force_close_popup.subscribe(() => {
            this.close();
        })
    }

    onMessage(event) {
        let data = ko.utils.parseJson(event.data)

        if (data && data.name) {
            if (data.name == 'login.check' && data.auth_hash && data.auth_hash != 'None') {
                if (sp.redirect) {
                    location.assign(sp.config().partner.loyalty_page_config.lp_url);
                    return
                }

                sp.force_close_popup(1);
                cookie.set('sp_auth_hash', data.auth_hash);
                sp.auth_hash = data.auth_hash;

                sp.getUserInfo({
                    user_status: 1
                }).then(() => {
                    sp.tagsAdd({
                        tags: sp.config().partner.loyalty_page_config.registered_tag
                    })
                    sp.tagsList({
                        show_calculated_values: 1
                    })
                });

                sp.getUserHistory();
            } else if (sp.auth_hash) {
                sp.user(false)
            }
        }
    }
}

class MainView {
    constructor(options) {
        this.config = ko.observable();
        this.user = ko.observable();

        sp.init(options);

        sp.user.subscribe(data => {
            this.user(data)
        })

        sp.auth_hash = cookie.get('sp_auth_hash');

        sp.config.subscribe(data => {
            if (window._invisible)
                return

            if (!sp.auth_hash) {
                if (window._prompt_login)
                    new Login()
            }
            if (sp.auth_hash) {
                sp.getUserInfo({
                    user_status: 1
                }).then(() => {
                    sp.tagsList({
                        show_calculated_values: 1
                    })
                });

                sp.getUserHistory();
            }

            this.config(data.partner.loyalty_page_config);

        })
    }
}

window._remoteLogin = () => {
    new Login(true)
}

window._logout = () => {
    let req = document.createElement('iframe');
    req.width = 0;
    req.height = 0;
    req.style.border = 'none';
    req.src = 'https://sailplay.net/users/logout';
    document.body.appendChild(req);
    req.onload = () => {
        cookie.remove('sp_auth_hash')
        document.body.removeChild(req);
        sp.auth_hash = '';
        sp.user(false);
    }
}

for (let component of [
    'profile',
    'status',
    'status-bar',
    'questions',
    'banner',
    'history',
    'coupons'
]) {
    ko.components.register(`sailplay-${component}`, require(`./components/${component}`))
}

ko.components.register('sailplay-magic', {
    viewModel: {
        createViewModel: () => {
            return new MainView({})
        }
    },
    template: require('@templates/magic.html')
});

ko.applyBindings();