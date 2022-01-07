const frutas = ['uva', 'maça', 'banana', 'melancia'];
//cria um novo array manipulado apartir de um array existente
const frutasComIndex = frutas.map((fruta, index) => `${index} - ${fruta}`);
console.log(frutas);
console.log(frutasComIndex);