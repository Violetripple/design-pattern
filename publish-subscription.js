class pubSub {
  constructor() {
    // theme/event channel
    this.topics = {};
  }

  publish(topic, args) {
    if (!this.topics[topic]) return;
    const subscribers = this.topics[topic];
    subscribers.forEach(subscriber => {
      subscriber.update(args);
    });
  }

  subscribe(topic, subscriber) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(subscriber);
  }
}

const pubsub = new pubSub();

pubsub.subscribe('one', subscriber);
pubsub.publish('one', 'some args');