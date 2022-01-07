const arr = [1,3,3,3,4];

//verifica se algum item do array atente a condição e retorna um booleano
const someItemIsPair = arr.some(value => value % 2 === 0);

console.log(someItemIsPair);

const students = [
    {name : 'Felipe', grade : 5},
    {name: 'Maria', grade: 7},
    {name: 'João', grade: 2}
];

const someAproved = students.some(student => student.grade >= 7);
console.log(aproved);