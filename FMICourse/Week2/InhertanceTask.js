var Person = function(name) {
    this.name = name;
}
Person.prototype.greet = function(){
    return 'Hello ' + this.name;
}

 var Teacher = function(name){
    this.name = name;
 }

 Teacher.prototype = Object.create(Person.prototype);

 var teach1 = new Teacher('Maria');
 console.log(teach1.greet());




