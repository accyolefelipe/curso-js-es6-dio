const arr = [1,2,3]
//faz um map e em seguida um flat de profundida 1
const arr2 = arr.flatMap(value => [value * 2]);
console.log(arr2);