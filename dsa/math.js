// Q1. Round number to N decimal places
function roundToDecimal(num, decimals) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// Q2. Generate random number between min and max
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Q3. Find absolute value
function absoluteValue(num) {
  return Math.abs(num);
}

// Q4. Calculate power
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Q5. Find square root
function squareRoot(num) {
  return Math.sqrt(num);
}

// Q6. Round up and round down
function roundNumbers(num) {
  return {
    ceil: Math.ceil(num),
    floor: Math.floor(num),
    round: Math.round(num)
  };
}

// Q7. Find min and max from numbers
function findMinMax(...numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

// Q8. Convert degrees to radians
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Q9. Convert radians to degrees
function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

// Q10. Calculate distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
