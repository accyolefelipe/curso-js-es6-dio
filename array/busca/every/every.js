const arr = [1,3,3,3,4];

//verifica setodos os itens atendem a condição e retorna um booleano
const everyItemArePair = arr.every(value => value % 2 === 0);

console.log(everyItemArePair);

const students = [
    {name : 'Felipe', grade : 5},
    {name: 'Maria', grade: 7},
    {name: 'João', grade: 2}
];

const everyAproved = students.every(student => student.grade >= 7);
console.log(everyAproved);