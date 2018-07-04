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

function vehicleFactory(options) {
  if (options.type === 'car') {
    return new Car(options);
  } else {
    return new Trunk(options);
  }
}
