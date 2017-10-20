let sub = new ko.subscribable()

export let subscribe = (handler, topic) => {
    sub.subscribe(handler, null, topic)
}

export let publish = (message, topic) => {
    sub.notifySubscribers(message, topic)
}