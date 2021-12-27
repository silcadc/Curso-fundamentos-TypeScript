//hemos reutilizado el cod del file clases-private.ts//
export {};
//clases privadas
//clases miembros pivados
//TS define una manera propia de declarar o marcar un miembro como privado usando la
//palabra reservada private

enum PhotoOrientation {
    Landscape = 'Landscape',
    Portrait = 'Portrait',
    Square = 'Square',
    Panorama = 'Panorama',
}

//los modificadores de acceso son metodos que me permiten controlar
//el acceso a cada uno de los miembros, son set y get

//GET Y SET
//en esta clase no puedo acceder a sus miembros, no existe ningun mecanismo
//por tanto puedo definir los metodos get y set despues del constructor sin parametros
//cuyo rol sera retornar el estado de nuestro identificador
class Picture {
    //defino las propiedades de esta entidad
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    };

    //Metodo Get y Set
    get id() {//el error es porque el nombre de la funcion accesora coincide con el
        //nombre de un miembro, entonces arriba id le agregaremos un _
        return this ._id;//se agrego _ antes del id
    }
    set id(id: number) {
        this._id = id;
    }

    get title() {//Get retorna el estado interno de nuestro miembro title
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }

    get orientation() {//Get retorna el estado interno de nuestro miembro orientation
        return this._orientation;
    }
    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }//Los anteriores son los metodos accesores que nos permitiran acceder y cambiar
    //el estado de los miembros privados que tenemos en la clase Picture

    // Comportamiento
    public toString() {//representa en cadena mi objeto
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}
                ]`;//utilizo los backticks para lograr una cadena
    };
};

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[] = [];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        // this.pictures = [];//de esta forma inicializaria la variable
    }

    //Debajo del constructor add Metodo Get y Set
    get id() {
        return this._id;//Get retorna el estado interno de nuestro miembro id
    }
    set id(id: number) {//Set nos permite cambiar su estado o modificarlo, por lo tando
        //debemos indicar el tipo de dato como parametro y hacemos la asigancion
        this._id = id;
    }

    get title() {
        return this._title;//retornando el estado de _title
    }
    set title(t: string) {
        this._title = t;//modificamos el estado de title con el parametro t
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