const myArray = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];
let currElem = 0;
for (i = 1; i < myArray.length; ++i) {
  let j = i - 1;
  currElem = myArray[i];
  while (j >= 0 && currElem < myArray[j]) {
    myArray[j + 1] = myArray[j]; // quando n'ao satisfaz
    j--;
  }
  myArray[j + 1] = currElem;

  console.log(myArray);
}
