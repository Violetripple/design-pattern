// A decorator class
class M20 {
  constructor(o) { // o is an existing object containing methods.
    const str = '20 age time';
    this.eat = function () {
      return str + o.eat() + 'fat enough!';
    }
    this.drink = function () {
      return str + o.drink() + 'drink much!';
    }
    this.coding = function () {
      return str + o.coding() + 'coding much!';
    }
  }
}

alert(new M20(david).eat());
alert(new M20(david).drink());
alert(new M20(david).coding());