export {};
//los ususarios pueden venir con id 10 o con una cadenas
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// //Buscar username dado un ID
// function getUsernameById(id: number | string) {
//     ///logica de negocio, find the user
//     return "silcadc"
// }

// getUsernameById(20);
// getUsernameById('20');

//Alias de tipos para TS
type IdUser = number | string;
type Username = string;//puedo establecer un
//alias para un tipo de dato especifico
let idUser: IdUser;
idUser = 10;
idUser = '10';

//Buscar username dado un ID
function getUsernameById(id: IdUser): Username {
    ///logica de negocio, find the user
    return "silcadc"
}

getUsernameById(20);
getUsernameById('20');

//Tipos Literales en TS
//100x100, 500x500, 1000x1000
type squareSize = '100x100' | '500x500' | '1000x1000';
//let samllPicture: squareSize = '200x200';//error
let samllPicture: squareSize = '100x100';
let mediunPicture: squareSize = '500x500';
