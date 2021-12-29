const user = {
    name: 'Felipe',
    lastName: 'de Lacerda Accyole'
}

console.log('Valores das propriedades do objeto user: ', Object.keys(user));
//recupera as chaves do objeto

console.log('Valores das chaves: ', Object.values(user));
//recupera os valores das chaves do objeto

console.log('Lista de propriedades e valores: ', Object.entries(user));
//retorna um array de arrays contendo [nome-prop, valor-prop]

Object.assign(user, {fullName: 'Edvan Felipe de lacerda Accyole'});
console.log(user);
//mergear propriedades de objetos
const novo = {
    age: 27
};
console.log('Retorna um novo objeto mergendo os dois objetos passados', Object.assign({}, user, novo));
//mergear propriedades de objetos criando um novo {}

const newObj = {foo: 'bar'};
Object.freeze(newObj);
//nao permite  alteracoes em  um objeto
newObj.foo = 'changed'; //alteracao
delete newObj.foo; //exclusao
newObj.bar = 'foo' //inclusao de pro
console.log('Objeto newObj após as alterações com o freeze: ', newObj)

const person = {name: 'Felipe'};
Object.seal(person);
//permite que apenas a propriedade existente seja alterada, vetando a deleção e criação de prop de um obj
person.name = 'Edvan Felipe';//alteracao
delete person.name;//exclusao
person.age = 20;//inclusao de prop
console.log('Objeto person apos alteracao utilizando o seal', person);
