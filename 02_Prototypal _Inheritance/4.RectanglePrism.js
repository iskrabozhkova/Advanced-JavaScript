//task1
var Point = function(x,y){
    this.x = x;
    this.y = y;
}
var point1 = new Point(4,5);
var point2 = new Point(2,3);


Point.prototype.getDistance = function(point2){
    return Math.sqrt(Math.pow(point2.x - this.x, 2)  + Math.pow(point2.y - this.y, 2));
}

console.log(point1.getDistance(point2))

//task2
var Circle = function(x,y,r){
    Point.call(this,x,y);
    this.r = r;
}

Circle.prototype = Object.create(Point.prototype);
var circle1 = new Circle(1,2,5);

//find perimeter of circle
Circle.prototype.getCircumference = function(){
    return 2 * Math.PI * this.r;
}
//find area of circle
Circle.prototype.getArea = function(){
    return Math.PI * Math.pow(this.r,2);
}
//if intersects
Circle.prototype.intersects = function(circle2){
    var distance = Math.sqrt(Math.pow(circle2.x - this.x, 2)  + Math.pow(circle2.y - this.y, 2));
    if(distance < this.r + circle2.r){
        return true;
    }else{
        return false;
    }
}
var cir2 = new Circle(10,12,3);
//console.log(circle1.getDistance(point2));
//console.log(circle1.getArea());
//console.log(circle1.intersects(cir2));

//task3

var Rectangle = function(x,y,a,b){
    Point.call(this,x,y);
    this.a = a;
    this.b = b;
}
Rectangle.prototype = Object.create(Point.prototype);
Rectangle.prototype.getPermiter = function(){
    return 2*(this.a + this.b);
}
Rectangle.prototype.getArea = function(){
    return this.a * this.b;
}
Rectangle.prototype.getLengthOfDiagonals = function(){
    var diag = Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
    var arr = [diag, diag];
    return arr;
}

var rect1 = new Rectangle(2,1,3,4);
console.log(rect1.getLengthOfDiagonals());

//task 4
var RectanglePrism = function(x,y,a,b, c){
    Rectangle.call(this,x,y,a,b);
    this.c = c;
}
RectanglePrism.prototype = Object.create(Rectangle.prototype);

RectanglePrism.prototype.getVolume = function(){
    return this.getArea() * this.c;
}

var prism = new RectanglePrism(2,7,4,5,3);
console.log(prism.getVolume());