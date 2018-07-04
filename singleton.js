// one class can only have one instance on singleton pattern.
class Obj {
  constructor(data) {}
}

// use closure to achieve singleton pattern
function singleton(data) {
  let instance;
  return function () {
    if (!instance) {
      instance = new Obj(data);
    }
    return instance;
  }
}