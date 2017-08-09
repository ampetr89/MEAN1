
// let name = 'Jason';
//
// function printName(name) {
//   console.log(name);
// }
//
//
// setTimeout(() => {
//   printName(name);
// }, 2000);
//
//
// console.log('when does this happen');

function processThingsFromDB(things){
  console.log(things);
}
function thingsFromDatabase(query, success) {
  // console.log(this);

  // this.x = 5;
  setTimeout(() => {
    let things = ['jason', 'anna'];

    // console.log(`this is x ${ this.x }`);
    success(things);
  }, 1000);
}

class Deck {
  constructor() {
    // this
  }
}


thingsFromDatabase('select ....',
  result => {
    console.log('this is an anon. function!')
    console.log(result.entries());
    for(const [key, value] of result.entries()){
      console.log(key, value);
    }
  });




//
