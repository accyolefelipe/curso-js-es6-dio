const textSize = 'Texto'.length;
console.log(`quantidade de letras: ${textSize}`);
//retorna tamanho da string

const splitedText = 'Texto'.split('x');
console.log(`string separada pelo delimitador x: ${splitedText}`);
//retorna um array quebrando a string pelo delimitador

const replacedText = 'Texto'.replace('Text' , 'tEXT');
console.log(`string buscada e substituida: ${replacedText}`);
//busca um valor e substitui por outro

const lastChar = 'Texto'.slice(-1);
console.log(`ultima posição da string: ${lastChar}`);
//retorna a "fatia" de um valor

const allWhithoutLastChar = 'Texto'.slice(0, -1);
console.log(`string sem a ultima posição: ${allWhithoutLastChar}`);
//retorna a string da primeira a penultima posição

const secondToEnd = 'Texto'.slice(1);
console.log(`string da segunda posição em diante: ${secondToEnd}`);
//retorna a string sem a posição 0

const twoPositionsAfterTheFirst = 'Texto'.substr(0, 2);
console.log(`As duas primeiras letras são: ${twoPositionsAfterTheFirst}`);
//substr tem o primeiro parametro como a posição inicial e o segundo como o numero de posições



