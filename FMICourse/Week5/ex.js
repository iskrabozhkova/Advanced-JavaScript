// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.getData = function(){
//     const {name, age} = this;
//     return {name, age, target: 'Person'}
// }

// function Employee(name, age,position){
//     Person.call(this, name,age);
//     this.position = position;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.getAllData = function(){
//     const proto1 = Object.getPrototypeOf(this);
//     //const proto2 = Object.getPrototypeOf(proto1);
//     return {...proto1.getData.call(this)}
// }

function duckCount(){
    return Array.prototype.slice.call(arguments).filter(function (obj){
        
    })
}
var notDuck = Object.create({quack: true})
var duck = {quack: true}
duckCount(duck, notDuck) // 1