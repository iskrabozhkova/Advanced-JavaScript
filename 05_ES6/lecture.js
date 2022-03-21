
// function React(){
//     this.state = {
//         value: undefined
//     }
// }
// React.prototype.useState = function(initialState){
//     this.state.value = initialState;
//     return [this.state, (newState) => {
//         this.state.value = newState;
//     }]
// }

// const react = new React();
// let [state, setState] = react.useState(0);
// setState(5);
// console.log(state);

let animals = {
    // add property
    domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
    // add method
    printdomesticAnimals: function () {
           console.log("inside printdomesticAnimals", this);
      // print after 3 seconds
      setTimeout(() => {
        console.log("inside setTimeout", this);
      }, 3000);
    },
  };
  animals.printdomesticAnimals();


// function duckCount(){
//   var args = Array.prototype.slice.call(arguments);
//   return args.filter(function(obj){
//     return Object.prototype.hasOwnProperty.call(obj, 'quick')
//   }).length
// }

// var obj = {
//   quick: 12,
//   name: 'Name'
// }
// var obj2 = {
//   age: 12,
//   name: 'Pencho',
//   quick: '12'
// }

// console.log(duckCount(obj, obj2));

