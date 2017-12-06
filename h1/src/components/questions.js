let sp = require('@lib/sp')

class QuestionsView {
    constructor() {
        this.questions = ko.observableArray();
        this.faq_link = ko.observable();
        this.texts = ko.observable();

        sp.config.subscribe(data => {
            this.questions(data.partner.loyalty_page_config.faq_questions)
            this.faq_link(data.partner.loyalty_page_config['faq\'s_page'])
            this.texts(data.partner.loyalty_page_config.texts)
        })
    }
}

module.exports = {
    viewModel: QuestionsView,
    template: require('@templates/questions.html')
};