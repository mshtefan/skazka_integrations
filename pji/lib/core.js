import ko from 'knockout';
import 'knockout-mapping';
import jsonp from './jsonp'

export class SailPlay {
    constructor(opts = {}) {
        let self = this;
        self.opts = opts;
        self.config = ko.observable();
        self.actions_config = ko.observable();
        jsonp({
            url: `${self.opts.domain}/js-api/${self.opts.partner_id}/config`,
            data: {
                lang: opts.lang || 'en',
                dep_id: opts.dep_id,
            },
            success: data => {
                self.config(ko.mapping.fromJS(data).config);
            }
        })
    }

    popupWindow(url, title, w, h) {
        var width, height, left, top;
        if (w !== undefined && h !== undefined) {
            width = w;
            height = h;
            left = (screen.width / 2) - (w / 2);
            top = (screen.height / 2) - (h / 2);
        } else {
            width = screen.width / 2;
            height = screen.height / 2;
            left = width - (width / 2);
            top = height - (height / 2);
        }

        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    };

    openSocialRegNeedPopup(action) {
        var w;
        if (action.socialType == 'vk')
            w = this.popupWindow(this.actions_config().social.vk.authUrl, 'social_reg', 840, 400);
        else if (action)
            w = this.popupWindow(this.actions_config().social[action.socialType].authUrl, 'social_reg');

        var checkPopupInterval = setInterval(() => {
            if (w == null || w.closed) {
                this.performComplete()                
                clearInterval(checkPopupInterval);
            }
        }, 100);
    }

    performAction(action, pji) {
        if (action.socialType && this.actions_config().connectedAccounts) {
            if (this.actions_config().connectedAccounts[action.socialType] && action.socialType  != 'tw' && action.socialType != 'gp') {
                this.openSocialRegNeedPopup(action);
            } else {
                this.share(action);
            }
        } else if (!action.socialType && !action.content) {
            var frameUrl = `${this.opts.domain}/popup/${this.config().partner.id()}/widgets/custom/${action.type}/?auth_hash=${this.opts.auth_hash}`;
            frameUrl += '&lang=' + this.config().lang();
            frameUrl += '&from_sdk=0';
            var actionFrame = this.popupWindow(frameUrl, 'SailPlay', 600, 400);
            var checkPopupInterval = setInterval(() => {
                if (actionFrame == null || actionFrame.closed) {
                    this.performComplete()
                    clearInterval(checkPopupInterval);
                }
            }, 200);
        } else {
            let name = this.config_name;
            let config = this.config;

            // iframe.style.backgroundColor = "transparent";
            // iframe.frameBorder = "0";
            // iframe.allowTransparency="true";

            var iframeUrl = `${this.opts.domain}${this.config().urls.actions.custom.render().replace(':action_id', action.id)}?auth_hash=${this.opts.auth_hash}&lang=${this.opts.lang || 'en'}`
            pji.showCustomAction(true)
            pji.customActionSrc(iframeUrl)
        };
    }

    share(action) {
        var frameUrl = `${this.opts.domain}/js-api/${this.config().partner.id()}/actions/social-widget/?auth_hash=${this.opts.auth_hash}`;
        frameUrl += '&socialType=' + action.socialType + '&action=' + action.action + '&link=' + action.shortLink + '&pic=' + (this.actions_config().partnerCustomPic ? this.actions_config().partnerCustomPic : this.config().partner.logo());

        frameUrl += '&msg=' + this.actions_config().messages[action.action];
        frameUrl += '&_actionId=' + action['_actionId'];

        if (action.action == 'purchase') {
            frameUrl += '&purchasePublicKey=' + this.actions_config().purchasePublicKey;
        }

        var socialFrame = this.popupWindow(frameUrl, 'social_action', 200, 210);
        var checkPopupInterval = setInterval(() => {
            if (socialFrame == null || socialFrame.closed) {
                this.performComplete()                
                clearInterval(checkPopupInterval);
            }
        }, 200);

    };

    getConfigByName(name = 'default') {
        this.config_name = name;
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.loyalty_page_config_by_name()}`,
                data: {
                    name: name,
                },
                success: resolve
            })
        })
    }

    existTags(tags_arr = []) {
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.tags.exist()}`,
                data: {
                    tags: JSON.stringify(tags_arr),
                    auth_hash: this.opts.auth_hash
                },
                success: resolve
            })
        })
    }

    addTags(tags_arr = [], opts) {
        return new Promise((resolve, reject) => {
            let auth_hash = this.opts.auth_hash;
            if (opts.auth_hash !== undefined) {
                auth_hash = opts.auth_hash;
            }

            jsonp({
                url: `${this.opts.domain}${this.config().urls.tags.add()}`,
                data: {
                    tags: tags_arr.join(','),
                    auth_hash: auth_hash,
                    email: opts.email,
                    phone: opts.phone
                },
                success: resolve
            })
        })
    }

    removeTags(tags_arr = [], opts) {
        return new Promise((resolve, reject) => {
            let auth_hash = this.opts.auth_hash;
            if (opts.auth_hash !== undefined) {
                auth_hash = opts.auth_hash;
            }

            jsonp({
                url: `${this.opts.domain}${this.config().urls.tags.delete()}`,
                data: {
                    tags: tags_arr.join(','),
                    auth_hash: auth_hash,
                    email: opts.email,
                    phone: opts.phone
                },
                success: resolve
            })
        })
    }

    getHistory() {
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.users.history()}`,
                data: {
                    auth_hash: this.opts.auth_hash
                },
                success: resolve
            })
        })
    }

    getGifts() {
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.gifts.list()}`,
                data: {
                    auth_hash: this.opts.auth_hash
                },
                success: resolve
            })
        })
    }

    updateUserInfo(user_data) {
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.users.update()}`,
                data: user_data,
                success: resolve
            })
        })
    }

    getUserInfo() {
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.users.info()}`,
                data: {
                    auth_hash: this.opts.auth_hash
                },
                success: resolve
            })
        })
    }

    getActions() {
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.actions.load()}`,
                data: {
                    auth_hash: this.opts.auth_hash
                },
                success: data => {
                    this.actions_config(data.data);
                    resolve(data)
                }
            })
        })
    }

    updateCustomVars(vars_data) {
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.users.custom_variables.add()}`,
                data: vars_data,
                success: resolve
            })
        })
    }    

    getCustomActions() {
        return new Promise((resolve, reject) => {
            jsonp({
                url: `${this.opts.domain}${this.config().urls.actions.custom.list()}`,
                data: {
                    auth_hash: this.opts.auth_hash
                },
                success: resolve
            })
        })        
    }

    performPoll(poll) {
        return new Promise((resolve, reject) => {
            
            

        })
    }
}