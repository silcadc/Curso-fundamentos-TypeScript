"use strict";
console.log('Hola TypeScript con Platzi!');
//number
// Explicito
let phone;
phone = 1;
phone = 54234567;
//phone = 'miPhone';//Error
//Inferido o implicito
let phoneNumber = 54234567; // ya vemos que el compilador de TypeScript
//define el tipo de dato de acuerdo con el valor.
phoneNumber = 123;
//phoneNumber = true; //Error, porque la variable es numerica, 
//el error es por tipo de dato
let hex = 0xf00d; //0x, digitos entre el 0 y el caracter f, 
//de 0 al 9, tomando a,b,c,d y f. Representan valores hexadecimal
let binary = 0b1010; //0b para indicar que a continuacion
//habra un valor binario.
let octal = 0o744; //0o que significa un valor octal 
//y definimos digitos entre 0 y 7.
//Tipo: Boolean
//Tipado explicito
let isPro;
isPro = true;
//isPro = 1; //Error porque es un valor tipo boolean
//Tipo Inferido o implicito
let isUserPro = false;
isUserPro = true;
//isUserPro = 10; //Error xq TypeScript verifica el tipo de valor
//String
//tipo de dato explicito para las cadenas
let username = 'silenaDc';
username = "Silena";
//username = true;//Error
//template string or template literal
//uso de back-tick o back-quote ``
let userInfo;
userInfo = `
    User info:
    username: ${username}
    firstName: ${username + ' Dangond'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('user Info', userInfo);
