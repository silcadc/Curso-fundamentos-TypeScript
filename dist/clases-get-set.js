"use strict";
exports.__esModule = true;
//clases privadas
//clases miembros pivados
//TS define una manera propia de declarar o marcar un miembro como privado usando la
//palabra reservada private
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//los modificadores de acceso son metodos que me permiten controlar
//el acceso a cada uno de los miembros, son set y get
//GET Y SET
//en esta clase no puedo acceder a sus miembros, no existe ningun mecanismo
//por tanto puedo definir los metodos get y set despues del constructor sin parametros
//cuyo rol sera retornar el estado de nuestro identificador
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    ;
    Object.defineProperty(Picture.prototype, "id", {
        //Metodo Get y Set
        get: function () {
            //nombre de un miembro, entonces arriba id le agregaremos un _
            return this._id; //se agrego _ antes del id
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (o) {
            this._orientation = o;
        } //Los anteriores son los metodos accesores que nos permitiran acceder y cambiar
        ,
        enumerable: false,
        configurable: true
    });
    //el estado de los miembros privados que tenemos en la clase Picture
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
        this._id = id;
        this._title = title;
        // this.pictures = [];//de esta forma inicializaria la variable
    }
    Object.defineProperty(Album.prototype, "id", {
        //Debajo del constructor add Metodo Get y Set
        get: function () {
            return this._id; //Get retorna el estado interno de nuestro miembro id
        },
        set: function (id) {
            //debemos indicar el tipo de dato como parametro y hacemos la asigancion
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "title", {
        get: function () {
            return this._title; //retornando el estado de _title
        },
        set: function (t) {
            this._title = t; //modificamos el estado de title con el parametro t
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
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
