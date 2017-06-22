import ko from 'knockout';
import sailplay from 'sailplay-hub';

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

export default function (messager) {
    return function (params) {
        this.history = ko.observableArray([]);
        this.next_status_point = ko.observable();
        this.purchases_sum = ko.observable();

        this.formatDate = date_string => {
            let date = new Date(date_string);
            return `${pad(date.getDate(), 2)}.${pad(date.getMonth() + 1, 2)}.${date.getFullYear()}`
        }

        this.checkPoints = points => {
            let point = parseInt(points);
            if (point > 0) return `+${formatLargeNumber(points)}`;
            return formatLargeNumber(points)
        }

        this.update = config => {
            if (!config) config = this.config
            sailplay.jsonp.get(config.DOMAIN + config.urls.users.history, {
                auth_hash: config.auth_hash,
            }, result => {              
                if (result.history)  
                this.history(result.history.map(el => {
                    el.data_text = ko.observable();
                    el.details_opened = ko.observable(false)
                    return el
                }));
            })
        }
        
        messager.subscribe('user_purchases_sum', sum => {
            this.purchases_sum(sum())
        })

        messager.subscribe('next-status', next_status_point => {
            this.next_status_point(next_status_point)
        })

        messager.subscribe('init', config => {
            this.config = config;
            this.update(config);
        })

        messager.subscribe('history_update', this.update)

        this.popupVm = {
            opened: ko.observable(false),
            history: this.history,
            pages: ko.computed(() => {
                return Math.ceil(this.history().length / 6.0)
            }),
            setPage: index => {
                this.popupVm.current_page(index())
            },
            nextPage: () => {
                this.popupVm.current_page(this.popupVm.current_page() + 1)
            },            
            getPurchaseDetails: (item) => {
                let opened = item.details_opened();
                item.details_opened(!opened);
                if (item.data_text()) {
                    return
                } 
                sailplay.jsonp.get(this.config.DOMAIN + '/js-api/1649/purchases/get', {
                    auth_hash: this.config.auth_hash,
                    id: item.id
                }, result => {
                    item.data_text(result)
                })
            },
            formatDate: this.formatDate,
            checkPoints: this.checkPoints,
            width: ko.observable('650px'),
            current_page: ko.observable(0),
            openHistory: () => {
                document.body.className += ' no_scrol';
                this.popupVm.current_page(0);
                this.popupVm.opened(true)
            }
        }
    }
}