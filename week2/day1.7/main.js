//
//
// function sayHello(name) {
//   console.log(`hello ${ name }`);
// }
//
// setTimeout(() => {
//   sayHello('Jason');
// }, 1000);
//
// console.log('we are here');
//
//
// //
//
// let data;

function thingsFromDB(query, callback) {
  // console.log(this);

  // this.x = 5;
  // const self = this;

  setTimeout(() => {
    // console.log('x is ', self.x);
    const data = ['Jason', 'Cheryl', 'Shawn'];

    callback(data);
  }, 1000);

  // continue
}

thingsFromDB('select ....', handleThingsFromDB2);

const myFunc = function() {};


myFunc();

function handleThingsFromDB(data) {
  console.log('handling')
  console.log(data);
}

function handleThingsFromDB2(data) {
  console.log('handling2')
  console.log(data);

  for (const item of data) {
    console.log(item);
  }
}

// setTimeout(() => {
//   console.log(data);
// }, 1200);
//
