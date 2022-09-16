const myArray = [1, 15, 2, 7, 2, 5, 7, 1, 4];
function verifica(x) {
  for (let i = 0; i < myArray.length; ++i) {
    for (let j = 0; j < myArray.length; ++j) {
      if (i < j) {
        const soma = myArray[i] + myArray[j];
        if (soma == x) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(verifica(15));
