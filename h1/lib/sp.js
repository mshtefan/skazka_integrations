(function () {
    let jsonp = require('./jsonp');

    class SailPlay {
        constructor() {
            this.config = ko.observable();
            this.inited = ko.observable();

            this.user = ko.observable();

            this.user_had_phone = false;
            this.user_had_email = false;

            this.options = {};
        };

        init(options) {
            let self = this;

            self.inited(true);
            self.options.partner_id = 1781;
            self.options.domain = 'http://sailplay.net';
            self.auth_hash = options.auth_hash;

            jsonp({
                url: `${self.options.domain}/js-api/${self.options.partner_id}/config`,
                data: {
                    lang: options.lang || 'en',
                    dep_id: options.dep_id || 1,
                },
                success: data => {
                    self.config(data.config);
                }
            })
        };

        getUserInfo() {
            if (!this.inited())
                throw new Error('sp not inited');

            return new Promise((resolve, reject) => {
                jsonp({
                    url: `${this.options.domain}${this.config().urls.users.info}`,
                    data: {
                        auth_hash: this.auth_hash,
                        all: 1
                    },
                    success: data => {
                        this.user(ko.mapping.fromJS(data));
                        if (this.user().user.birth_date()) {
                            let date = this.user().user.birth_date();
                            this.user().user.birth_date(`${date.split('-')[1]} / ${date.split('-')[2]} / ${date.split('-')[0]}`)
                        }

                        if (this.user().user.email())
                            this.user_had_email = this.user().user.email()

                        if (this.user().user.phone())
                            this.user_had_phone = this.user().user.phone()
                        resolve(data);
                    }
                })
            })
        }

        getCustomVars(data) {
            if (!this.inited())
                throw new Error('sp not inited');

            return new Promise((resolve, reject) => {
                data.auth_hash = this.auth_hash;

                jsonp({
                    url: `${this.options.domain}${this.config().urls.users.custom_variables.batch_get}`,
                    data: data,
                    success: resolve
                })
            })
        }

        updateUserInfo(data) {
            if (!this.inited())
                throw new Error('sp not inited');

            let _data = { auth_hash: this.auth_hash }
            if (data.first_name) _data.firstName = data.first_name
            if (data.last_name) _data.lastName = data.last_name
            if (data.birth_date) _data.birthDate = data.birth_date
            if (data.email) _data.email = data.email
            if (data.phone) _data.phone = data.phone

            if (this.user_had_email && _data.email && this.user_had_email != _data.email) {
                _data.addEmail = _data.email;
                delete _data['email']
            }

            if (this.user_had_phone && _data.phone && this.user_had_phone != _data.phone) {
                _data.addPhone = _data.phone;
                delete _data['phone']
            }

            return new Promise((resolve, reject) => {
                jsonp({
                    url: `${this.options.domain}${this.config().urls.users.update}`,
                    data: _data,
                    success: result => {
                        if (result.status == 'ok') {
                            this.getUserInfo();
                            resolve(result);
                        }
                    }
                })
            })
        }

        updateCustomVars(date) {
            return new Promise((resolve, reject) => {
                date.auth_hash = this.auth_hash;

                jsonp({
                    url: `${this.options.domain}${this.config().urls.users.custom_variables.add}`,
                    data: date,
                    success: resolve
                })
            })
        }
    }

    let sp = new SailPlay()

    module.exports = sp;
})();