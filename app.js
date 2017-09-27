var side1 = 5;
var side2 = 6;
var side3 = 7;
var semiPerimeter = (side1 + side2 + side3)/2

var area = Math.sqrt(semiPerimeter*(semiPerimeter-side1)*(semiPerimeter-side2)*(semiPerimeter-side3));
 document.write("Area of a triangle with the three sides 5, 6, 7 is :" + area)