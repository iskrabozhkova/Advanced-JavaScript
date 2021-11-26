
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.number=56;
Person.prototype.greeting = function(){
    return 'Hello, I am ' + this.name;
}
var func = Person.prototype.greeting;

var maria = new Person ('Maria', 20);
var ivan = new Person('Maria', 20);
console.log(maria.greeting());

var callString = func.call({name: 'New name', age: 15});
var bindFunc = func.bind({name: 'Bindname', age: 10});
console.log(bindFunc());
console.log(callString);





