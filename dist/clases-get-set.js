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
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    ;
    //Metodo Get y Set
    get id() {
        //nombre de un miembro, entonces arriba id le agregaremos un _
        return this._id; //se agrego _ antes del id
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    } //Los anteriores son los metodos accesores que nos permitiran acceder y cambiar
    //el estado de los miembros privados que tenemos en la clase Picture
    // Comportamiento
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}
                ]`; //utilizo los backticks para lograr una cadena
    }
    ;
}
;
class Album {
    constructor(id, title) {
        this.pictures = [];
        this._id = id;
        this._title = title;
        // this.pictures = [];//de esta forma inicializaria la variable
    }
    //Debajo del constructor add Metodo Get y Set
    get id() {
        return this._id; //Get retorna el estado interno de nuestro miembro id
    }
    set id(id) {
        //debemos indicar el tipo de dato como parametro y hacemos la asigancion
        this._id = id;
    }
    get title() {
        return this._title; //retornando el estado de _title
    }
    set title(t) {
        this._title = t; //modificamos el estado de title con el parametro t
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'personal picture');
const picture = new Picture(1, 'TypeScript', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//accediendo a los miembros publicos con metodos accesores
console.log('picture.id', picture.id); // get id()
picture.id = 100; //private, set id(100);
picture.title = 'Another title'; //private
album.title = 'Personal Activities'; //private
console.log('album', album);
export {};
