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
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    // set id(id: number) {//al ser id solo lectura ya set no es necesario
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
//GET Y SET
class Picture extends Item {
    constructor(id, title, orientation) {
        //los mismos valores, id, title, orientation a la hora de crear un obj
        super(id, title); //utilizo la palabra reservada super, como funion especial
        //via la funcion super estoy invocando al constructor de la Super Clase Item
        this._orientation = orientation;
    }
    ;
    //Metodo Get y Set
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}
                ]`; //utilizo los backticks para lograr una cadena
    }
    ;
}
//los atributos id y title eran compartido por la class Picture y Album por lo cual
//se almacenan en una Super clase para de esa forma ahorrar cod con la herencia
Picture.photoOrientation = PhotoOrientation; //static me permite definir
;
class Album extends Item {
    constructor(id, title) {
        super(id, title); //constructor de SUPER clase
        this.pictures = [];
        this.pictures = [];
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
//picture.id = 100;//private, set id(100);//no puedo mod el estado de id pq es readonly
picture.title = 'Another title'; //private
album.title = 'Personal Activities'; //private
console.log('album', album);
//Cuando una Super clase llega a ser demaciado general y queremos evitar instancias
//a partir de la misma, utilizamos las clases abstractas
//CLASES ABSTRACTAS
//las clases abstractas son la base de donde otras podrian derivarse.
//A diferencia de una interfaz, una clase abstracta puede implementar
//funciones para sus instancias.
//palabra reservada ABSTRACT
//const item = new Item(1, 'test title');//Error no puedo instanciar un obj de Item
//porque Item es una clase abstracta
//console.log('item', item);//No tiene mucho sentido porque hay otras entidades que nos
//interesan como usuario, album, picture, etc. Item por si mismo es muy general existe
//una forma de controlar la instanciacion de los objetos a partir de la clase Item
//a traves del uso de la palabra reservada abstracta, se puede anteponer a la definicion
//de nuestra clase y esto significa para TS que no podemos proveer la creacion de obj
//a partir de la misma.
//PROPIEDADES ESTATICAS Y PROPIEDADES DE SOLO LECTURA
//Las clases por lo general definen atributos y metodos aplicables a
//las instancias de las mismas.
//A traves de la palabra reservada STATIC se puede definir un miembro
//visible a nivel de clase.
//Al igual que las interfaces, podemos usar la palabra reservada READONLY
//para marcar el miembro de una clase como solo lectura.
//Probar el miembro estatico de la clase picture
console.log('PhotoOrientation', Picture.photoOrientation.Landscape); //accedo a los
//miembros de la clase Picture. Puedo leer el estado especifico.
