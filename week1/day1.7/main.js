var x = "Hello World";
// var i;
x = 53;
var u;
var y =[0,2,3,2];

for (let i = 0; i < y.length; i++) {
  console.log(y[i]);
}

const obj = {type: "car", make:"Honda"};

obj.model = 'Civic';
obj['tire'] = 4;
// console.log(cat);

function addMath(num1, num2) {
  var sum = num1 + num2;

  if (sum > 0) {
    console.log("im a big number");
  }
  else if (sum < 0){
    sum += num1;
    // sum = sum + num1;
    console.log("im a small number");
  } else {
    console.log("im zero");
  }
}
addMath(2,7)

while(true) {
  console.log('never ending');
  break;
}

console.log(obj);

function parent() {
  var parentInfo = 'parent';
  console.log('in parent');
  function child() {
    console.log('in child');
    console.log(parentInfo);
    console.log(obj);
  }

  child();
}


parent();

function returnValue(thing1, thing2) {
  // console.log(arguments);
  // console.log(everything)
  console.log(thing1);
  // return obj;
}

console.log(returnValue(...['information', 'more stuff']));
//


/***
increment()
=> 2
increment()
=> 3
increment()
=> 4
*/

// var i = 0;
function increment() {
  var i = 0;
  function inChild() {
    i+= 1;
    return i;
  }
  // console.log(inChild()) //
  return inChild;
}

increment = increment();
console.log(increment)
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());


///
