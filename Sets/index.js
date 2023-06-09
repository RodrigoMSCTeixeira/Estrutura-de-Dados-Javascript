/*
Criando uma Classe SET

Métodos:

add - adiciona um novo elemento ao conjunto;
delete - remove um elemento do conjunto;
has - devolve true de o elemento estiver no conjunto, e false caso contrário;
clear - remove todos os elementos do conjunto;
size - devolve quantos elementos estão contidos no conjunto;
values - devolve um array com todos os elementos que estão no conjunto.

*/

class Set {
  constructor() {
    this.items = {};
  }

  has = (element) => {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  };

  add = (element) => {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }

    return false;
  };

  delete = (element) => {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  };

  clear = () => {
    this.items = {};
  };

  size = () => {
    return Object.keys(this.items).length;
  };

  values = () => {
    return Object.values(this.items);
  };
}

const set = new Set();

set.add(1);
set.add(2);

console.log(set.values());
console.log(set.has(1));
console.log(set.size());
