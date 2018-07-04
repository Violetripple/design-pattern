class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'silver';
  }
}

class Trunk {
  constructor(options) {
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
  }
}

class AbstractFactory {
  constructor() {
    this.types = {};
  }

  registerFactory(type, factory) {
    this.types[type] = factory;
  }
  getInstance(type, args) {
    const factory = this.types[type];
    if (factory) {
      return new factory(args);
    }
  }
}

const abstractFactory = new AbstractFactory();
abstractFactory.registerFactory('car', Car);
abstractFactory.registerFactory('trunk', Trunk);

abstractFactory.getInstance('car', options);
abstractFactory.getInstance('trunk', options);
