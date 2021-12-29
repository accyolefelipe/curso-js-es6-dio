// E logico (&&)
exp1 && exp2
var a1 = true && true; //return true
var a2 = true && false; //return false
var a3 = 'gato' && 'cao' //return cao
var a4 = false && 'cao' //return false
var a5 = 'cao' && false //return false

// OU logico (||)
exp1 || exp2
var a1 = true || true; //return true
var a2 = true || false; //return true
var a3 = 'gato' || 'cao' //return gato
var a4 = false || 'cao' //return cao
var a5 = 'cao' || false //return cao

// NOT logico
var a1 = !false  //return true
var a2 = !true //return false
var a3 = !'gato'  //return false