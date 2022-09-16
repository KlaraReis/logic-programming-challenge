const myArray = [9, 2, 3, 1, 4];
let maiorValor = -1;
for (let i = 0; i < myArray.length; ++i) {
  var currElem = myArray[i];
  if (currElem > maiorValor) {
    maiorValor = currElem;
  }
}
for (let j = 0; j < maiorValor; ++j) {
  var found = myArray.find(function (elem) {
    return elem === j;
  });
  if (found == null) {
    myArray.push(j);
  }
}
console.log(myArray);
