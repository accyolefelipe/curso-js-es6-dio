function fn(){
    return 'code here';
}

const arrowFn = () => 'code here arrow';

const arrowFn2 = () => {
    //mais de uma expresão
    return'code here';
}
console.log(fn());
console.log(arrowFn());

//funcaoes tb são objetos
fn.newProp = 'Nova Propiedade';
console.log(fn.newProp);


const logValue = value => console.log(value);

// const logFnResult = fnParam => console.log(fnParam());
function logFnResult(fnParam){
    return console.log(fnParam())
};
logFnResult(fn);

function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed){
            fnParam();
        }
    }
};
const handleFnExecution = controlFnExec(fn);
handleFnExecution(true);
handleFnExecution();









