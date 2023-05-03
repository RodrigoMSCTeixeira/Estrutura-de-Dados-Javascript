class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  //Inserção de elementos na Fila
  enqueue = (element) => {
    this.items[this.count] = element;
    this.count++;
  };

  //Verificando se a pilha está vazia
  isEmpty = () => {
    return this.count - this.lowestCount === 0;
  };

  //Remoção de elementos da Fila
  dequeue = () => {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  };

  //Devolve o primeiro elemento da fila
  peek = () => {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  };

  //Retorna quantos elementos tem na fila
  size = () => {
    return this.count - this.lowestCount;
  };

  //Limpar a fila
  clear = () => {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  };

  //Método toString
  toString = () => {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  };
}

const queue = new Queue();
queue.enqueue("Jhon");
queue.enqueue("Jack");
queue.enqueue("Joe");
queue.enqueue("Camila");
queue.dequeue();

console.log(queue.toString(), queue.size());
