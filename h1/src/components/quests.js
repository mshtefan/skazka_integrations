let sp = require('@lib/sp')

class QuestsView {
    constructor(params) {
        this.quests = ko.observableArray()
        this.texts = ko.observable()

        sp.config.subscribe(data => {
            this.texts(data.partner.loyalty_page_config.texts);
        })     
        
        sp.user.subscribe(data => {
            if (!data) return
            
            Promise.all([sp.getActions(), sp.getCustomActions()])
                .then(data => {
                    let merge = data[0].data.actions.concat(data[1].actions);

                    merge.sort((a, b) => {
                        function get_order(item) {
                            if (item.type == 'socialSharing')
                                return sp.config().partner.loyalty_page_config.actions[item.socialType][item.action].order
                            else
                                return sp.config().partner.loyalty_page_config.actions[item.type].order
                        }

                        return get_order(a) - get_order(b)
                    })

                    this.quests(merge)
                })
        })

        sp.performComplete = () => {
            sp.getActions()
        }
    }

    perform(action) {
        sp.performAction(action);
    }

    getIcon(item) {
        if (item.type == 'socialSharing')
            return sp.config().partner.loyalty_page_config.actions[item.socialType][item.action].icon
        else
            return sp.config().partner.loyalty_page_config.actions[item.type].icon
    }

    getTitle(item) {
        if (item.type == 'socialSharing')
            return sp.config().partner.loyalty_page_config.actions[item.socialType][item.action].title
        else
            return sp.config().partner.loyalty_page_config.actions[item.type].title
    }

    getDesc(item) {
        if (item.type == 'socialSharing')
            return sp.config().partner.loyalty_page_config.actions[item.socialType][item.action].description
        else
            return sp.config().partner.loyalty_page_config.actions[item.type].description
    }
}

module.exports = {
    viewModel: params => new QuestsView(params),
    template: require('@templates/quests.html')
};