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

var Circle = function(x,y,r){
    this.x = x;
    this.y = y;
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
console.log(circle1.getDistance(point2));
console.log(circle1.getArea());
console.log(circle1.intersects(cir2));

