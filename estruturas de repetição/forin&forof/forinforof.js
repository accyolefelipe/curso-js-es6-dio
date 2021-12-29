let arr = [3,5,7];
arr.foo = "hello";

for (let i in arr){
    console.log(i);
}
//imprime os indices e a propriedade;

for (let i of arr){
    console.log(i);
}
//imprime os valores numerados