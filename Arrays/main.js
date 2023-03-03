/* Juntando Vários Arrays. 
Junta vários arrays e devolve uma 
cópia dos arrays concatenados. */
const zero = 0;
const positiveNumbers = [1, 2, 3, 4];
const negativeNumbers = [-1, -2, -3, -4];
const numbers = negativeNumbers.concat(zero, positiveNumbers);

/* Iterando com o método every.
Itera por todos os elementos 
do Array, verificando uma condição 
desejada(função) até que false seja devolvido. */
const isEven = (x) => x % 2 === 0;
numbers.every(isEven);

/* Iterando com o método some
Itera por todos os elementos 
do Array, verificando uma condição 
desejada(função) até que true seja devolvido. */
numbers.some(isEven);
console.log();

/* Iterando com o método forEach
Executa uma função específica em 
cada elemento do array. */

//numbers.forEach((x) => console.log(x % 2 === 0));

/* Map - Cria outro array a partir de uma função que
contém o critério/condição e devolve os elementos
do array que corresponde ao critério.

Filter - Cria um array com todos os elementos
avaliados com true pela função especificada. */

const myMap = numbers.map(isEven);
const evenNumbers = numbers.filter(isEven);
const reduce = numbers.reduce((previous, current) => previous + current);

//Iterando com o laço for...of

for (const n of numbers) {
  //console.log(n % 2 === 0 ? "even" : "odd");
}

/* @@iterator
Devolve um objeto iterador que contém os pares
chave/valor do array; pode ser chamado 
sincronamente para obter chave/valor dos elementos
do array */

const iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
  //console.log(n);
}

/* entries - Devolve @@iterator, que contém pares 
chave/valor. 

keys - Devolve @@iterator, contendo as chaves do 
array

values - Devolve @@iterator, contendo os valores do
array*/

const aEntries = numbers.entries();
for (const n of aEntries) {
  //console.log(n);
}

const aKeys = numbers.keys();
//console.log(aKeys.next());

const aValues = numbers.values();
//console.log(aValues.next());

/* Usando o método from
Cria um novo array a partir de um array 
existente. */

const evens = Array.from(numbers, (x) => x % 2 == 0);

/* Usando o método Array.of
Cria um novo array a partir dos argumentos passados
para o método. */

const numbers2 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/* Usando o método Fill
Preenche o array com um valor estático. */

//numbers2.fill(0);
//numbers2.fill(2, 1);
//numbers2.fill(1, 3, 5);

/* Usando o método copyWithin
Copia uma sequência de valores do array na posição
de um índice de início. */

const copyArray = [1, 2, 3, 4, 5, 6];
//console.log(copyArray.copyWithin(1, 3, 5));

/*Ordenando Elementos
sort - Organiza o array em ordem alfabética ou de
acordo com a função especificada. 

reverse - inverte o array, de modo que o último
item se torne o primeiro, e vice-versa*/

const reverse = numbers.reverse();
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
};

const sortWithFunction = numbers.sort(compare);
const sort = numbers.sort((a, b) => a - b);
const friends = [
  {
    name: "Jhon",
    age: 30,
  },
  {
    name: "Ana",
    age: 20,
  },
  {
    name: "Chris",
    age: 25,
  },
];

const comparePerson = (a, b) => {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }

  return 0;
};

//console.log(friends.sort(comparePerson));

const names = ["Ana", "ana", "jhon", "Jhon"];
/*
console.log(
  names.sort((a, b) => {
    if (a.toLocaleLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLocaleLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  })
);
console.log(names.sort((a, b) => a.localeCompare(b)));
*/

/* Pesquisa
indexOf - Pesquisa o array em busca de elementos 
específicos e devolve sua posição

lastIndexOf - Devolve a posição do últmo item do
array que corresponda ao critério de pesquisa

find - Busca um elemento no array, dada uma 
condição desejada(função de callback), e devolve
o elemento caso seja encontrado 

findIndex - Busca um elemento no array, dada uma
condição desejada(função de callback), e devolve
o elemento caso seja encontrado.*/

//console.log(names.indexOf("Ana"));
//console.log(names.indexOf("jhon"));

//console.log(names.lastIndexOf("Ana"));
//console.log(names.lastIndexOf("jhon"));

const multipleOf2 = (element, index, array) => {
  return element % 2 == 0;
};

//console.log(numbers2.find(multipleOf2));
//console.log(numbers2.findIndex(multipleOf2));

/* Usando método includes
Devolve true caso um elemento seja encontrado no
array, e false caso contrário. Foi adicionado na 
ES 2016.*/
//console.log(names.includes("marcos"));
