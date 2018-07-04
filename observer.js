/** 
 * target object 
 */
class Subject {
  constructor() {
    // observer list
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver() {
    this.observers.pop();
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

/**
 * observer 
 */
class Observer {
  constructor() {
    // will be overwritten by the specific Update method when used
    this.update = () => { };
  }
}

/** 
 * specific target
 */
class currentSubject extends Subject {
  constructor() {
    super();
  }

  // other custom method.
  doSomething() {
    console.log('currentSubject changed.');
    this.notify();
  }
}

/**
 * Specific observer
 */
class currentObserver extends Observer {
  constructor() {
    super();
  }

  // rewrite update method.
  update() {
    console.log('Changed!');
  }
}

/**
 * Subscription
 */
const curSubject = new currentSubject();
const curObserver = new currentObserver();
curSubject.addObserver(curObserver);
// invoke
curSubject.doSomething();
// output: currentSubject changed.