class Animal {
    constructor(qtdePatas){
        this.qtdePatas = 0;
    }
    movimentar(){}
}
class Cachorro extends Animal {
    constructor(morde){
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir(){
        console.log('au! au!')
    }
}
const lobo = new Cachorro(true);
console.log(lobo);



class Person {
    constructor(name){
        this.name = name;
    }
}
class PersonF extends Person {
    constructor(name, cpf){
        super(name);
        this.cpf = cpf;
    }
}
const p = new PersonF('Jackson' , 99988877744);
console.log(p);



