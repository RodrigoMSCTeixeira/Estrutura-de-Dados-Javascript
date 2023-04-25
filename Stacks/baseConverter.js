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

const baseConverter = (decNumber, base) => {
  const remStack = new Stack();
  let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
};

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));
