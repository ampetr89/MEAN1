var x = 'a string';

x = 45;

x = [12,3,4];

for (var index = 0; index < x.length; index++) {
  console.log(x[index]);
}

var obj = {
  key: 'starting value',
  something: [1,2,3,4]
};

obj.key = 'some value';
console.log(obj);


obj['key'] = 'some other value';

console.log(obj);

function add(num1, num2) {
  return num1 + num2;
}

var value = 'this is a string';

function returnValue() {
  var value;
  console.log(value);

  if (true) {
    let value = 'some local val';

    console.log(value);
  }

  console.log(value);

  value = 'changed information';
  return value;
}

console.log(returnValue());


console.log(value);

// console.log(index);


function parent() {
  var parentInfo = 'parent';

  console.log(child());

  function child() {
    var childInfo = 'child';
    console.log(value);

    return childInfo;
  }
}


parent();

let thing = 'string';
thing = 'new value';
const another = 'thing 2';
// another = 'new value';
/**

increment()
=> 1
increment()
=> 2
increment()
=> 3

*/
// var i = 0;
function increment(step){
  var i = 0;
  function child(){
    i+=step;
    return i;
  }
  return child;
}

console.log(NaN === NaN)
increment = increment(3);


console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())







///
