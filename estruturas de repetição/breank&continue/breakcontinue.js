console.log('utilização do break');
var index = 0;

while(true){
    index++;
    if(index > 2){
        break;
    };
    console.log(index);
};

console.log('utilização do continue');
const arr = [1,2,3,4,5,6,7];
for(let i = 0; i < arr.length; i++){
    const element = arr[i];

    if(element % 2 === 0){
        continue;
    };
    console.log(element);
}