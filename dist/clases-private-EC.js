"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Picture_id, _Picture_title, _Picture_orientation, _Album_id, _Album_title, _Album_pictures;
exports.__esModule = true;
//TS V 3.8
//miembros privados EC
//TS tambien soporta (a partir de la v3.8) la nueva sintaxis JS
//para miembros privados: #atributo
//esta caracteristica puede ofrecer mejores garantias de
//aislamiento en miembros privados
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {})); //para definir una clase utilizo la palabra reservada class
var Picture = /** @class */ (function () {
    //ahora necesito definir una funcion especial para crear objetos a partir
    //de la clase Picture definido, por lo cual es necesario un constructor
    function Picture(id, title, orientation) {
        //defino las propiedades de esta entidad
        _Picture_id.set(this, void 0);
        _Picture_title.set(this, void 0);
        _Picture_orientation.set(this, void 0);
        //los atributos necesarios para crear el obj, a traves de parametros
        //la palabra reservada this me permite hacer referencia a las diferentes
        //propiedades que tiene la clase
        __classPrivateFieldSet(this, _Picture_id, id, "f"); //this y el editor me muestra las posibilidades que puedo escoger
        __classPrivateFieldSet(this, _Picture_title, title, "f"); //les asignamos el valor que recibimos como parametro id, title, etc
        __classPrivateFieldSet(this, _Picture_orientation, orientation, "f");
    }
    ;
    //debo definir el comportamiento que tiene mi clase, eso es mediante funciones
    // Comportamiento
    Picture.prototype.toString = function () {
        return "[id: ".concat(__classPrivateFieldGet(this, _Picture_id, "f"), ",\n                title: ").concat(__classPrivateFieldGet(this, _Picture_title, "f"), ",\n                orientation: ").concat(__classPrivateFieldGet(this, _Picture_orientation, "f"), "\n                ]"); //utilizo los backticks para lograr una cadena
    };
    ;
    return Picture;
}());
_Picture_id = new WeakMap(), _Picture_title = new WeakMap(), _Picture_orientation = new WeakMap();
;
var Album = /** @class */ (function () {
    function Album(id, title) {
        _Album_id.set(this, void 0);
        _Album_title.set(this, void 0);
        _Album_pictures.set(this, void 0);
        __classPrivateFieldSet(this, _Album_id, id, "f");
        __classPrivateFieldSet(this, _Album_title, title, "f");
        __classPrivateFieldSet(this, _Album_pictures, [], "f"); //de esta forma inicializaria la variable
    }
    Album.prototype.addPicture = function (picture) {
        __classPrivateFieldGet(this, _Album_pictures, "f").push(picture);
    };
    return Album;
}());
_Album_id = new WeakMap(), _Album_title = new WeakMap(), _Album_pictures = new WeakMap();
var album = new Album(1, 'personal picture');
var picture = new Picture(1, 'TypeScript', PhotoOrientation.Square);
album.addPicture(picture); //con el metodo addPicture relaciones album y picture
console.log('album', album); //este obj album dado que tiene miembros privados no
//nos ofrece informacion sobre los obj que contiene o el estado de sus miembros
//private es la solucion antigua y la nueva sintaxis es #atributo (es mejor para
//encapsular la informacion)
//con private en cambio aun es posible conocer los miembros de los objetos
