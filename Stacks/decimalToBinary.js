class Stack {
  constructor() {
    this.items = [];
  }

  //Adiciona elemento na pilha
  push = (element) => {
    return this.items.push(element);
  };

  //Remove um elemento da pilha
  pop = () => {
    return this.items.pop();
  };

  //Quem está no topo da pilha
  peek = () => {
    return this.items[this.items.length - 1];
  };

  //Verifica se a pilha está vazia
  isEmpty = () => {
    return this.items.length === 0;
  };

  //Retorna o tamanho da pilha
  size = () => {
    return this.items.length;
  };

  //Limpando os elementos da pilha
  clear = () => {
    this.items = [];
  };
}

const decimalToBinary = (decNumber) => {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
};

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));
