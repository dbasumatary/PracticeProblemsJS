//Inch to feet conversion
console.log("Convert 42 inches in ft");
console.log("1 ft = 12 inches");
let valueInFeet = 42 / 12;
console.log("42 inches in feet: " + valueInFeet + " ft");

console.log("");

//Feet to meter conversion
console.log("Convert Area in meter square");
let rectangleArea = 60 * 40;
console.log("Area of plot in feet: " + rectangleArea + "ft");
console.log("1 ft = 0.3048 meter");
let rectangleAreaInMeter = rectangleArea * 0.3048;
console.log("Area of plot in meter square: " + rectangleAreaInMeter + " square meters");

console.log("");

//Feet to acres conversion
console.log("Calculate Area of 25 such plots in acres");
let totalAreaInMeter = rectangleAreaInMeter * 25;
console.log("Area of 25 plot in meter: " + totalAreaInMeter + " square meters");
let totalAreaInAcre = rectangleAreaInMeter / 4046.86;
console.log("Area of 25 plot in meter square: " + totalAreaInAcre + " square acres");