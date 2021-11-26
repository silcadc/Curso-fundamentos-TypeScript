//explicita
var nullVariable; //al especificar el tipo de dato null
//la variable solo recibira null
nullVariable = null;
// nullVariable = 1;//un error porque solo admite valores null
var otherVariable = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);
//Undefined
var UndefinedVariable = undefined;
// UndefinedVariable = 'test';//error de parte del compilador o editor
var otherUndefined = undefined; //el compilador infiere que
//la variable es tipo any, lo que permite que se pueda reasignar
//otro tipo de dato a la variable como a continuacion
otherUndefined = 1;
console.log('UndefinedVariable', UndefinedVariable);
console.log('otherUndefined', otherUndefined);
//Los tipo Null y undefined son considerados subtipos de any
//Null y undefined como subtipos
var albumName;
albumName = null;
albumName = undefined; //el error es por el chequeo estricto
//la forma practica de evitar problemas consiste en evitar 
//la asignacion de null o undefined y eso se logra con el parametro
//--strictNullChecks (es agregar un flag en el compilador JavaScript)
//cada vez que encuentre una asignacion con null o undefined
//se producira un error
