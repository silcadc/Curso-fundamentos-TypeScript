"use strict";
exports.__esModule = true;
//usamos TS y definimos tipos para parametros
// function createPicture(title: string, date: string, size: squareSize) {
//     //se crea la fotografia
//     console.log('create Picture Using', title, date, size);
// }
// createPicture('My Birthday', '2020-03-10', '500x500');
//createPicture('Colombia Trip', '2020-03');//si no completo mi cod tendre un error
//puesto que la funcion esta relacionada con 3 parametros y no con solo dos.
//para eso debo hacer uso de los parametros opcionales
//Parametros opcionales en funciones
//estos son un mecanismo para permitir el paso de diferentes valores
//o maneras diferentes de utilizar la funcion. a traves del uso de ?
//despues del nombre de la variable. esto le indica a TS que puede que
//no llegue ese valor dentro de la function
function createPicture(title, date, size) {
    //se crea la fotografia
    console.log('create Picture Using', title, date, size);
}
createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '2020-03');
createPicture('Colombia Trip');
createPicture(); //funciona muy bien la ejecucion de la function
//Flat array function
//se usa desde el EC6, es la forma plana para crear nuestras funciones
//es una nueva sintaxis
var createPic = function (title, date, size) {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);
//tipo de retorno en funciones con TS
//TS me ayuda en los tipos de retorno
function handleError(code, message) {
    //never es un tipo de dato que relanza un error desde la funcion
    // | el operador pipe indica la union de tipos
    //Procesamiento del cod, mensaje
    if (message === 'error') { //de esta manera se ejecutara nuestra funcion
        throw new Error("".concat(message, ". Code error: ").concat(code));
    }
    else {
        return 'An error has occurred';
    }
}
try {
    var result = handleError(200, 'ok'); //string
    console.log('result', result);
    result = handleError(400, 'error'); //never, nunaca retorna un valor valido
    console.log('result', result);
}
catch (error) {
}
//null y undefined son subtipos de datos
