////Herencia de clases y propiedades estaticas
export {};
//hemos reutilizado el cod del file clases-get-set.ts//

//Herencia de clases y miembros protegidos
//TS soporta este patron comun en el mundo de la POO.
// implementa la habilidad de extender  cod de clases existentes
// a traves de la herencia
enum PhotoOrientation {
    Landscape = 'Landscape',
    Portrait = 'Portrait',
    Square = 'Square',
    Panorama = 'Panorama',
}

// SUPERclase
//es la nueva clase donde podre definir las propiedades id y title, compartidas por
//2 clases mas abajo
class Item {
    protected _id: number;//protected da acceso a las subclases,
    //no es publico ni privado, acceso intermedio
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}

//GET Y SET
class Picture extends Item{//mi clase Picture extiende desde mi Super clase Item
    //los atributos id y title eran compartido por la class Picture y Album por lo cual
    //se almacenan en una Super clase para de esa forma ahorrar cod con la herencia
    private _orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {//en este punto yo espero recibir
    //los mismos valores, id, title, orientation a la hora de crear un obj
        super(id, title);//utilizo la palabra reservada super, como funion especial
    //via la funcion super estoy invocando al constructor de la Super Clase Item
        this._orientation = orientation;
    };

    //Metodo Get y Set
    get orientation() {//Get retorna el estado interno de nuestro miembro orientation
        return this._orientation;
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }

    // Comportamiento
    public toString() {//representa en cadena mi objeto
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}
                ]`;//utilizo los backticks para lograr una cadena
    };
};

class Album extends Item{//Album hereda el id y el title
    private pictures: Picture[] = [];

    public constructor(id: number, title: string) {
        super(id, title);//constructor de SUPER clase
        this.pictures = [];
    }

    public addPicture(picture: Picture) {//este es el metodo que me permite agregar fotografias
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'personal picture');
const picture: Picture = new Picture(1, 'TypeScript', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);

//accediendo a los miembros publicos con metodos accesores
console.log('picture.id', picture.id);// get id()
picture.id = 100;//private, set id(100);
picture.title = 'Another title';//private
album.title = 'Personal Activities';//private
console.log('album', album);

//Cuando una Super clase
//Clases Abstractas
//las clases abstractas son la base de donde otras podrian derivarse.
//A diferencia de una interfaz, una clase abstracta puede implementar
//funciones para sus instancias.
//palabra reservada abstract

