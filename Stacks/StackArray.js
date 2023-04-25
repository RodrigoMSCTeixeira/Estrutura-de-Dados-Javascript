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

const stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);

console.log(stack.size());
