// Ex1
// crie um algoritmo que retorne o fatorial de 10.

// let fator = 1;
// for (let index = 10; index < 0; index -=1) {
//     fator *= index;
// }
// console.log(fator);

// Ex2
// Agora, desenvolva um algoritmo que é capaz de inverter uma 
// palavra. Por exemplo, a palavra "banana" seria invertida para 
// "ananab". Utilize a string abaixo como exemplo,depois troque 
// por outras para verificar se seu algoritmo está funcionando 
// corretamente.

// let word = 'trybe';
// let drow = '';

// for (let index = 0; index < word.length; index += 1) {
//     drow += word [word.length - 1 - index];
// }
// console.log(drow);

//Ex3
//Escreva dois algoritmos: um que retorne a maior palavra 
// deste array e outro que retorne a menor. Considere o número 
// de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);
// esse só entendi por causa do gaba

//Ex4
// Um número primo é aquele divisível apenas por 1 e por 
// ele mesmo. Sabendo disso, escreva um algoritmo que retorne 
// o maior número primo entre 0 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);