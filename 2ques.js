const arvore = {
  noRaiz: {
    value: "maca",
    filhoDireita: {
      value: "pera",
      filhoDireita: {
        value: "abacaxi",
        filhoDireita: {
          value: "laranja",
          filhoDireita: {
            value: "cebola",
          },
          filhoEsquerda: {
            value: "banana",
          },
        },
      },
    },
    filhoEsquerda: {
      value: "morango",
      filhoDireita: {
        value: "limao",
      },
      filhoEsquerda: {
        value: "goiaba",
      },
    },
  },
};

const itemToBeFound = "abacaxi";
const path = [];
function findUnderNode(node) {
  // noraiz de baixo com outro nome
  if (node.value == itemToBeFound) {
    path.push(node.value);
    return true;
  }

  if (node.filhoEsquerda != null && findUnderNode(node.filhoEsquerda)) {
    path.push(node.value);
    return true;
  }

  if (node.filhoDireita != null && findUnderNode(node.filhoDireita)) {
    path.push(node.value);
    return true;
  }
  return false;
}

const achei = findUnderNode(arvore.noRaiz);
if (achei) {
  console.log(path.reverse());
} else {
  console.log("Item not found.");
}
