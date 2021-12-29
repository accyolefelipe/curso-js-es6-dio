const students = [
    {
        name: 'João',
        grade: 7
    },
    {
        name: 'José',
        grade: 4
    },
    {
        name: 'Lilian',
        grade: 10
    }
];

function getAprovedStudents(aprovedStudents){
    return aprovedStudents.filter(student => student.grade >= 7);  
}

console.log('Alunos Aprovados: ');
console.log(getAprovedStudents(students));
console.log('Todos os Alunos: ');
console.log(students);
