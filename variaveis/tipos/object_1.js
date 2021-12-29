user = {
    name : 'Felipe'
};

console.log(user);

//alterando propriedade existente
user.name = 'Felipe Alterado';
console.log(user.name);
user['name'] = 'Felipe Alterado 2';
console.log(user.name);

//adicionado nova prop
user.lastname = 'Accyole';
console.log(user);

//deletando prop
delete user.name;
console.log(user);

//adicionando nova prop
const propNova = 'endereco';
function getProp(prop){
    return user[prop] = 'Nova Prop ou prop alterada';
}
getProp(propNova);
console.log(user);
