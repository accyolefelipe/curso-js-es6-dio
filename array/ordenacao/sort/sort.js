const students = [
    {name : 'Felipe', grade : 5},
    {name: 'Maria', grade: 7},
    {name: 'João', grade: 2}
];

//ordena de acorso com a condição
const sortedByGrade = students.sort((current, next) => current.grade - next.grade);
console.log(sortedByGrade);
const sortedByGrade2 = students.sort((current, next) => next.grade - current.grade);
console.log(sortedByGrade2);