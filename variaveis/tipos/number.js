const myNumber = 42.0340;
console.log(myNumber);

const numberAsString = myNumber.toString();
console.log(`Numero transformado em string: ${numberAsString}, Tipo:`, typeof numberAsString);
//retorna um numero transformado em string

const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`Numero com duas casas decimais: ${fixedTwoDecimals}, Tipo:`, typeof fixedTwoDecimals);
//retorna um numero com numero de casas decimais definido no parametro

console.log('String transformada em float: ' , parseFloat('13.20'));
//transforma string em floar

console.log('String transformada em int: ' , parseInt('13.20'));
//transforma string em int

