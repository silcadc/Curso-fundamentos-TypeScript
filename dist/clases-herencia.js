"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//hemos reutilizado el cod del file clases-get-set.ts//
//Herencia de clases y miembros protegidos
//TS soporta este patron comun en el mundo de la POO.
// implementa la habilidad de extender  cod de clases existentes
// a traves de la herencia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// SUPERclase
//es la nueva clase donde podre definir las propiedades id y title, compartidas por
//2 clases mas abajo
var Item = /** @class */ (function () {
    function Item(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
//GET Y SET
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, orientation) {
        var _this = 
        //los mismos valores, id, title, orientation a la hora de crear un obj
        _super.call(this, id, title) || this;
        //via la funcion super estoy invocando al constructor de la Super Clase Item
        _this._orientation = orientation;
        return _this;
    }
    ;
    Object.defineProperty(Picture.prototype, "orientation", {
        //Metodo Get y Set
        get: function () {
            return this._orientation;
        },
        set: function (o) {
            this._orientation = o;
        },
        enumerable: false,
        configurable: true
    });
    // Comportamiento
    Picture.prototype.toString = function () {
        return "[id: ".concat(this.id, ",\n                title: ").concat(this.title, ",\n                orientation: ").concat(this.orientation, "\n                ]"); //utilizo los backticks para lograr una cadena
    };
    ;
    return Picture;
}(Item));
;
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this.pictures = [];
        _this.pictures = [];
        return _this;
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}(Item));
var album = new Album(1, 'personal picture');
var picture = new Picture(1, 'TypeScript', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//accediendo a los miembros publicos con metodos accesores
console.log('picture.id', picture.id); // get id()
picture.id = 100; //private, set id(100);
picture.title = 'Another title'; //private
album.title = 'Personal Activities'; //private
console.log('album', album);
//Cuando una Super clase
//Clases Abstractas
//las clases abstractas son la base de donde otras podrian derivarse.
//A diferencia de una interfaz, una clase abstracta puede implementar
//funciones para sus instancias.
//palabra reservada abstract
