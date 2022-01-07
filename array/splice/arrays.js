const arr = [1, 2, 3, 4, 5, 6];
console.log(`array: ${arr}`)
const arr2 = arr.splice(2); // remove da posicao 2 em diante;
console.log(`itens removidos: ${arr2}`)
console.log(`itens restantes: ${arr}`)

const arr4 = arr.splice(0, 0, 'first'); 
//primeiro parametro: posicao que vai ser mexida, 
//segundo: items a serem removidos[nada].
//terceiro: oq ue adicionar na primeira posicao
console.log(`itens removidos: ${arr4}`)
console.log(`itens restantes e novos: ${arr}`)

const frutas = ['uva', 'maça', 'banana', 'melancia'];
const n = frutas.splice(1, 3, 'tomate');
//segundo parametro: items a serem removidos a partir da posicao informado no parametro 1.
console.log(n);
console.log(frutas)
