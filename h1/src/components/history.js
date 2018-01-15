import __jquery__ from 'jquery';
let sp = require('@lib/sp');

ko.bindingHandlers.dateText = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        return {
            'controlsDescendantBindings': true
        };
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        let data = new Date(valueAccessor());
        ko.utils.setTextContent(element, `${data.toLocaleString('en-us', { month: 'short' })} ${data.getDate()}, ${data.getFullYear()}`);
    }
};

class HistoryView {
    constructor(params = {}) {
        this.type = params.type || 'purchase';
        this.history = ko.observableArray();
        this.page = ko.observable(0);
        this.limitPerPage = ko.observable(10);
        this.allLoaded = ko.observable();
        this.registered = ko.observable();
        this.night_counter = ko.observable();
        this.collected = ko.observable(0);
        this.texts = ko.observable();
        this.purchases = ko.observable();

        switch (this.type) {
            case 'purchase':
                this.collection = 'purchase_history'
                break;
            case 'activity':
                this.collection = 'activity_history';
                break;
        }

        this[this.collection] = ko.computed(() => {

            let collection = ko.utils.arrayFilter(this.history(), item => {
                if (this.type == 'purchase')
                    return item.action == 'purchase'
                if (this.type == 'activity')
                    return true
            })

            if (this.type == 'activity')
                collection.sort((a, b) => {
                    return new Date(a.action_date) - new Date(b.action_date)
                })

            collection.forEach(item => {
                if (item.action == 'purchase') {
                    sp.purchaseGet(item.id)
                        .then(data => {
                            let purchases = this.purchases() || {};
                            purchases[item.id] = data;
                            this.purchases(purchases)
                        })
                }
                return item;
            })

            return collection;
        });

        this.getName = item => {
            if (!item) return;
            let purchases = this.purchases();
            return purchases &&
                purchases[item.id] &&
                purchases[item.id].cart &&
                purchases[item.id].cart.cart &&
                purchases[item.id].cart.cart.positions[0] &&
                purchases[item.id].cart.cart.positions[0].name || item.order_num
        }

        this.getLink = item => {
            if (!item) return;
            let purchases = this.purchases();
            let link = purchases &&
                purchases[item.id] &&
                purchases[item.id].cart &&
                purchases[item.id].cart.cart &&
                purchases[item.id].cart.cart.positions[0] &&
                purchases[item.id].cart.cart.positions[0].product &&
                purchases[item.id].cart.cart.positions[0].product.sku;
            return link && `https://www.hotelsone.com/gsl.html?dsti=${link}&dstt=8`
        }

        this.pageCount = ko.computed(() => {
            return Math.ceil(this[this.collection]().length / this.limitPerPage())
        })

        sp.tags.subscribe(data => {
            this.night_counter(sp.config().partner.loyalty_page_config.night_counter_tag);
            if (!data) return
            let registered = ko.utils.arrayFirst(data, item => {
                return item.tag == sp.config().partner.loyalty_page_config.registered_tag
            })

            if (this.night_counter) {
                let counter = ko.utils.arrayFirst(data, item => {
                    return item.tag == this.night_counter()
                })

                if (counter) {
                    this.collected(counter.calculated_value || 0)
                }
            }

            if (!registered && !sp.redirect) {
                console.warn('Registered tag not exists');
                return
            }

            this.registered(registered.create_date.split(' ').join('T'));
        })

        sp.config.subscribe(data => {
            this.texts(data.partner.loyalty_page_config.texts);
        })

        sp.history.subscribe(data => {
            this.history(ko.mapping.toJS(data));
        })
    }

    listCurrentPage() {
        let collection = this[this.collection]().slice(
            this.page() * this.limitPerPage(),
            this.page() * this.limitPerPage() + this.limitPerPage()
        )

        return collection
    }

    setPage(page) {
        this.page(page - 1)
    }

    nextPage() {
        if (this.page() + 1 < this.pageCount())
            this.page(this.page() + 1);
    }

    prevPage() {
        if (this.page() > 0)
            this.page(this.page() - 1)
    }

    loadAll() {
        this.limitPerPage(9999);
        this.allLoaded(true);
    }

    getTexts(history_item) {
        let texts = {
            "purchase": "Purchase",
            "unconfirmed_purchase": "Purchase (points unconfirmed)",
            "gift_purchase": item => {
                return `You've redeemed a <strong>${item.name}</strong> (${item.coupon_number})`
            },
            "badge": "Badge",
            "extra": "Points Added",
            "registration": "Sign up",
            "referral": "Invite friend",
            "referred": "Registration from friend's invite",
            "referred_purchase": "Friend's purchase",
            "promocode": "Promocode activation",
            "enter_group": "Joined our group on ",
            "share_purchase": "Shared a purchase on ",
            "social_share": "Shared our website on ",
            "share_badge": "Shared a badge on ",
            "earn_badge": 'Earn badge ',
            "custom_action": "Custom action",
            "like": item => {
                return `Like us on ${{ fb: 'Facebook', gp: 'Google+' }[item.social_type]}`
            },
            "partner_page": item => {
                return `Shared our website on ${{ fb: 'Facebook', gp: 'Google+' }[item.social_type]}`
            }
        }

        if (__jquery__.isFunction(texts[history_item.action] || texts[history_item.social_action]))
            return (texts[history_item.action] || texts[history_item.social_action])(history_item)
        if (this.texts() && this.texts().history && this.texts().history.labels) {
            let action = history_item.action;
            if(history_item.action == 'purchase' && !history_item.is_completed) {
                action = 'unconfirmed_purchase'
            }
            return this.texts().history.labels[action] || texts[history_item.action];
        }
        return texts[history_item.action];
    }
}

module.exports = {
    viewModel: params => new HistoryView(params),
    template: require('@templates/history.html')
};