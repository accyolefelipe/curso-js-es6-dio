const names = ['Felipe', 'João', 'Maria'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}

const persons = [
    {
        name : 'Felipe',
        age : 31,
        gender : gender.MAN
    },
    {
        name : 'João',
        age : 12,
        gender : gender.MAN
    },
    {
        name : 'Maria',
        age : 20,
        gender : gender.WOMAN
    }
];

console.log('Itens: ' , persons.length);

console.log('Verifica se é Array: ', Array.isArray(persons));

persons.forEach((person , index, arr) => {
    console.log(`itera os itens do array / nome da pessoa: ${person.name} index: ${index}` , arr)
});

const olders = persons.filter(person => person.age > 15);
console.log('Lista com pessoas maiores de 15', olders);

//adcionando nova prop ao index do array
const personWithCourse = persons.map(person => {
    person.course = 'Curso de Inglês-Chines-tAGALO';
    return person;
});
console.log('person whit new prop: ', personWithCourse)

//criacao de nova variavel de um tipo diferente(number) atraves de uma prop do array
const totalAges = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
console.log('Idades das pessoas somadas: ', totalAges);

const totalEvenAge = persons
    .filter(person => person.age % 2 === 0)
    .reduce((totalAge, person) => {
        totalAge += person.age;
        return totalAge;
    }, 0);
console.log('Soma das idades pares ', totalEvenAge);




