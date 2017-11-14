let sub = new ko.subscribable()

export let subscribe = (handler, topic) => {
    sub.subscribe(handler, null, topic)
}

export let subscribeAll = (handler, topics) => {
    let data = {};
    for (let topic of topics) {
        sub.subscribe((result) => {
            data[topic] = result;

            let execute = true;
            for (let data_topic of topics) {
                if (!data[data_topic]) execute = false;
            }

            if (execute) {
                let data_results = [];             
                for (let data_topic of Object.keys(data)) {
                    data_results.push(data[data_topic])
                }
                handler(data_results);
                data = {};
            }

        }, null, topic)
    }
}

export let publish = (message, topic) => {
    sub.notifySubscribers(message, topic)
}