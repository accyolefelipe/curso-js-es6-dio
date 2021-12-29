//in
something in somethingItens

//arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho");
0 in arvores //true
3 in arvores // true
6 in arvores //false
"cedro" in arvores //false - especificar o numero do indice
"length" in arvores //true - propriedade do array existe

//objetos 
var meuCarro = {marca: "Honda", ano: 1998}
"marca" in meuCarro; //true

//instaceof
objeto instanceof tipoObjeto

var dia = new Date();
if(dia instanceof Date){
    //code
}
