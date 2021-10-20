// var person = {
//     name: 'unknown'
// }
var Person = function(name) {
    this.name = name;
}
var ivan = Object.create(Person);
ivan.age = 14;
//console.log(ivan);

 var Teacher = function(){
    this.name = 'Maria';
 }

 Teacher.prototype = Object.create(Person.prototype);
 console.log(Teacher.name);




