let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let index = 0; index < myArray.length; index += 1) {
  myArray[index].forEach(function(num){
    if ((num % 2) === 0) {
      console.log(num);
    }
  });
}; 

///or from solution
myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});