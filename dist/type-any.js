"use strict";
//tipo explicito
let idUser;
idUser = 1; //number
idUser = '1'; //string
//no presenta error porque any permite cualquier tipo de dato
console.log('idUser', idUser);
///tipo inferido
let otherId;
otherId = 1;
otherId = '1';
//otherId = true;
console.log('otherId', otherId);
let surprise = 'hello typescript';
// surprise.sayHello();//error
const res = surprise.substring(6); //funcion para acceder a la cadena especifica
console.log('res', res);
