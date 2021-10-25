
var string = "t 12:20 today service SERVNAME starteda"

var regex = new RegExp('([\d\:]+)(.*?)([A-Z]+)');

var result = string.match(regex);
//console.log(result);

var pos = string.search(/today/);
//console.log(pos);

var arr = [
    "this is a test",
    "where some text",
    "needs to be parsed",
    "and words found"
]
arr.forEach(function(el){
    var reg = /(\w*[oe]\w*)(\W|$)/;
    if(res = el.match(reg)){
        if(res[1].length === 4){
            console.log(res[1]);
        }
    }
})

var expr = "(1 + 3) + (3 + 5)"

var r2 = expr.replace(/(\d)+\s*[+-]\s*(\d)/, '$2 + $1');
//console.log(r2);

function Person(name, age){
    this.name = name;
    this.age = age;
}

// var ivan = User.call({}, 'Ivan', 20);
// var ivan2 = new User('Ivan', 30);
// console.log(ivan);
// console.log(ivan2);

function User(name, age, role){
    Person.call(this, name, age);
    this.role = role;
}

User.prototype = Object.create(Person.prototype);

//currying


function add(a,b,c){
    return a+b+c;
}

function curry(fn){
    return function curried(){
        var args = [].slice.call(arguments);
        if(arguments.length >= fn.length){
            return fn.apply(this, arguments);
        }else{
            return function(){
                var args2 = [].slice.call(arguments);
                args2 = args.concat(args2);
                return curried.apply(this, args2);
            }
        }
    }
}

var curried = curry(add);
var res = curried(1)(2,3);
console.log(res);
