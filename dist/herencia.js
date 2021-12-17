"use strict";
exports.__esModule = true;
//la herencia es un mecanismo para reutilizar cod.
//las interfaces pueden extenderse unas de otras. Esto permite copiar los
//miembros ya definidos en una interfaz o tra, ganando flexibilidad
//y reusabilidad de componentes
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
;
;
//para probar mi cód
var album = {
    //interfaz Album como tipo de dato
    id: 5,
    title: 'Meetups',
    description: 'Community events around the world' //solo descripcion no es heredada
};
var picture = {
    //como tipo de dato
    id: 10,
    title: 'Family',
    orientation: PhotoOrientation.Square
};
//reasignamos nuestros atributos
var newPicture = {}; //aca utilizo la asercion de tipos, sintaxis= variable as type
newPicture.id = 2;
newPicture.title = 'Moon';
//mostramos el estado de los objetos
console.log(album);
console.table({ album: album }); //en consola puedo ver tablas
console.table({ picture: picture });
console.table({ newPicture: newPicture });
