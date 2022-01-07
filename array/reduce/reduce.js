const students = [
    {name: 'Felipe', age: 30},
    {name: 'João', age: 20},
    {name: 'Maria', age: 40},
]

const idadeTotal = students.reduce((totalAge, student) =>{
    totalAge += student.age, 0
});

console.log(idadeTotal);