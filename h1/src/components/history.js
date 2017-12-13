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
                    return item.action != 'purchase'
            })

            if (this.type == 'activity')
                collection.sort((a, b) => {
                    return new Date(a.action_date) - new Date(b.action_date)
                })

            return collection;
        });

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

            this.registered(registered.create_date);
        })

        sp.config.subscribe(data => {
            this.texts(data.partner.loyalty_page_config.texts);
        })     

        sp.history.subscribe(data => {
            this.history(ko.mapping.toJS(data));
        })
    }

    redirectToProduct(item) {
        sp.purchaseGet(item.id)
            .then(data => {
                location.assign(`https://www.hotelsone.com/gsl.html?dsti=${data.cart.cart.positions[0].product.sku}&dstt=8`)
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
            "gift_purchase": item => {
                return `You've redeemed a <strong>${item.name}</strong>(${item.coupon_number})`
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
                return `Like us on ${{fb: 'Facebook', gp: 'Google+'}[item.social_type]}`
            },
            "partner_page": item => {
                return `Shared our website on ${{fb: 'Facebook', gp: 'Google+'}[item.social_type]}`
            }
        }

        if (__jquery__.isFunction(texts[history_item.action] || texts[history_item.social_action]))
            return (texts[history_item.action] || texts[history_item.social_action])(history_item)
        return texts[history_item.action];
    }
}

module.exports = {
    viewModel: params => new HistoryView(params),
    template: require('@templates/history.html')
};