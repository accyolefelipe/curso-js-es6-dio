const idades = [20, 35, [15, 23, [60, 74]]];

//faz o merge dos arrays dentro do array base de acordo com a profundidade passada (2)
const idadesJuntas = idades.flat(2);
console.log(idadesJuntas);