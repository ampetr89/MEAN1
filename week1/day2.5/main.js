

function Person(name, items) {
  this._name = name
  this.items = items;
}

Person.prototype.take = function take(item, target) {
  if (!target || !Array.isArray(target.items)) {
    throw new Error('target must have an items array');
  }

  for (let index = 0; index < target.items.length; index++) {
    if (item === target.items[index]) {

      console.log(`${ this.name } is taking ${ item } from ${ target.name }`);
      target.items.splice(index, 1);
      this.items.push(item);
      return true;
    }
  }

  return false;
}


const jason = new Person('Jason', ['wallet', 'keys', 'phone']);
const leeza = new Person('Leeza', ['gum', 'money']);

console.log(jason.take('gum', leeza));

Object.defineProperty(Person.prototype, 'name', {
  get: function() {
    return this._name;
  }
});
console.log(jason.name = 'Bob')
console.log(jason)




//
