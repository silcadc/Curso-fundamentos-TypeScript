export {};
//hemos reutilizado el cod del file clases-get-set.ts//
enum PhotoOrientation {
    Landscape = 'Landscape',
    Portrait = 'Portrait',
    Square = 'Square',
    Panorama = 'Panorama',
}

// SUPERclase
abstract class Item {
    protected readonly _id: number;
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
class Picture extends Item{
    private _orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {
        super(id, title);
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

class Album extends Item{
    private pictures: Picture[] = [];

    public constructor(id: number, title: string) {
        super(id, title);//constructir de SUPER clase
        // this.pictures = [];//de esta forma inicializaria la variable
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