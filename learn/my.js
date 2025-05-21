var myArray = [4, -5, 0, 2, -67, 8, 10, -34];
// find neg nums
function getNegativeNumbers(array) {
  return array.filter(function(value) {
    return value < 0;
  });
}
console.log(getNegativeNumbers(myArray));

const allnames = 'john, ashish,jkgA, LHDKjshdk, jsakhDJSDH, JAHSKJDHJW';

const splitnames = allnames.split(',');
console.log(splitnames);