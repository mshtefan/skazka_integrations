(function () {
    let jsonp = require('./jsonp');

    class SailPlay {
        constructor() {
            this.config = ko.observable();
            this.inited = ko.observable();

            this.user = ko.observable();

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
                        resolve(data);
                    }
                })
            })
        }
    }

    let sp = new SailPlay()

    module.exports = sp;
})();