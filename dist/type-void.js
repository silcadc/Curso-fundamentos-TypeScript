"use strict";
//void
//tipo explicito que tambien aplica a funciones
function showInfo(user) {
    console.log('user Info', user.id, user.username, user.firstName);
    //return 'hola'
}
; //al pasar el mouse sobre la funcion nos muestra que 
//el tipo de dato a retornar es void, ya que no esta 
//retornando un valor. Al utilizar un return con un 
//string dentro de la funcion showInfo, el compilador infiere 
//que el retorno es tipo string y no avoid.
showInfo({
    id: 1,
    username: 'Silena Dangond',
    firstName: 'Silena'
});
//tipo inferido que tambien aplica a funciones
function showFormattedInfo(user) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({
    id: 1,
    username: 'David Salcedo',
    firstName: 'David'
});
//TIPO VOID, como tipo de dato en variable
let unusable;
//unusable = null;//sale un error por el chekeo estricto de los tipos
unusable = undefined; //tengo el modo estricto para el chekeo de tipos
//escenario especial, donde null y undefined son un tipo de subtipos
//para el tipo void, esto no es muy usado pero es bueno saberlo
//siempre controlo esto con el chekeo estricto de tipos.
//tipo: never
function handleError(code, message) {
    //Process your code here
    //Generate a message
    throw new Error(`${message}. code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
;
sumNumbers(10);
