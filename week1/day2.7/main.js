

function Person(name, items) {
  if (!(this instanceof Person)) {
    return new Person(name, items);
  }
  // const person = { name };
  this.name = name;
  this.items = items;
}



Person.prototype.take = function take(item, target) {
  if (!target || !Array.isArray(target.items)) {
    throw new Error('target must have an items array');
  }

  for (let index = 0; index < target.items.length; index++) {
    if (item === target.items[index]) {
      target.items.splice(index, 1);
      this.items.push(item);
      return true;
    }
  }

  return false;
}

Person.prototype.toString = function() {
  return `Hi, I am ${ this.name }`;
};


function Car() {
  this.make = 'Honda';
}


Car.prototype.toString = function() {
  return `Hi, this is a ${ this.make }`
}

const jason = Person('Jason', ['wallet', 'gum', 'keys']);
const shawn = Person('Shawn', ['phone', 'lint', 'flash light']);

jason.take('lint', shawn);

console.log(1 === '1');

console.log(jason);
console.log(shawn.toString());
