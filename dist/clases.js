"use strict";
exports.__esModule = true;
//una clase en TS es la astraccion de un conjunto de objetos
//para definir una entidad usuario, puedo hacer uso de una clase usuario
//dentro de la definicion necesito una function especial
//console.clear();
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {})); //para definir una clase utilizo la palabra reservada class
// interface Entity {
//   id: number;
//   title: string;
// }
// class Entity {
//     id: number;
//     title: string;
//   }
var Picture = /** @class */ (function () {
    //ahora necesito definir una funcion especial para crear objetos a partir
    //de la clase Picture definido, por lo cual es necesario un constructor
    function Picture(id, title, orientation) {
        //los atributos necesarios para crear el obj, a traves de parametros
        //la palabra reservada this me permite hacer referencia a las diferentes
        //propiedades que tiene la clase
        this.id = id; //this y el editor me muestra las posibilidades que puedo escoger
        this.title = title; //les asignamos el valor que recibimos como parametro id, title, etc
        this.orientation = orientation;
    }
    ;
    //debo definir el comportamiento que tiene mi clase, eso es mediante funciones
    // Comportamiento
    Picture.prototype.toString = function () {
        return "[id: ".concat(this.id, ",\n                title: ").concat(this.title, ",\n                orientation: ").concat(this.orientation, "\n                ]"); //utilizo los backticks para lograr una cadena
    };
    ;
    return Picture;
}());
;
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.pictures = [];
        this.id = id;
        this.title = title;
        // this.pictures = [];//de esta forma inicializaria la variable
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(1, 'personal picture');
var picture = new Picture(1, 'TypeScript', PhotoOrientation.Square);
// const picture1 = new Picture(201, 'korn', PhotoOrientation.Square);
// console.log(picture);
// console.log(picture1);
album.addPicture(picture);
// album.addPicture(picture1);
console.log('album', album);
//clases miembros publicos
//TS define un modificador de acceso publico por defecto para los miembros de cla.
//Tambien es posible marcar un miembro como publico usando la palabra reservada public
//accediendo a los miembros publicos
picture.id = 100; //el acceso para cada uno de estos miembros es publico
//nada nos impide que podamos cambiar sus estados
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);
//TS considera un modificador de acceso denominado public por defecto para cada uno 
//de los miembros
