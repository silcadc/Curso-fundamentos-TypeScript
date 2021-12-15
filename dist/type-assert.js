"use strict";
exports.__esModule = true;
//Ademas de los tipos de datos TS tiene un mecanismo que nos ayuda a
//convertir los datos en algo que ya conocemos.
//cuando el programador conoce mas que TS sobre el valor de una variable
//es necesario utilizar un operador o mecanismo para la
//conversion de un tipo de dato
//la asercion de tipo se parece al casting de tipos de otros lenguajes
//pero no es lo mismo. En la asercion de tipo TS no realiza
//verificacion y no afecta al tiempo de ejecucion en nuestro codigo
// <tipo> // Angle Bracket syntax
var username;
username = 'silenaDangond'; //esta variable siempre sera any pero el programador
username = 'sile'; //conoce mucho mas que tipo de dato necesita
//tenemos una cadenas, TS confia en mi!
var message = username.length > 5 ? //operador ternario, esperamos
    "Welcome ".concat(username) : //una expresion booleana
    'Username is too short';
console.log('message', message);
var usernameWithId = 'silenadangond 1';
//como obtener el username, a partir de esta expresion?
username = usernameWithId.substring(0, 13); //substring es una
//propiedad de datos string, ya convertiido en string puedo hacer uso de este
console.log('username only', username);
//sintaxis 'as' otra forma de asercion
message = username.length > 5 ? //mencionamos la palabra reservada as
    "Welcome ".concat(username) :
    'Username is too short';
//console.log('message', message);
var helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
//la seleccion de la sintaxis dependera de las conveciones del proyecto
