"use strict";
// Type: object
let user;
user = {}; //object
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'pablo',
    isPro: true
};
console.log('user', user);
//console.log('user.username', user.username);//el compilador de typescript
//detecta un problema, el error es porque el tipo objetc no permite acceder
//a las propiedades del objeto.
//Object vs object
//el primero es la instancia de la clase Object de JavaScript
//el segungo es un tipo de valor no primitivo y justo con este tipo de valor
//no puedo acceder a las propiedades del objeto.
//Object vs object (clase JS vs Tipo TS)
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; //clase Object de JavScript
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);
