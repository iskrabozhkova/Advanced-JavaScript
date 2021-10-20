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






