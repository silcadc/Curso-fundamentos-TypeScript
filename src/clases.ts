export {};
//una clase en TS es la astraccion de un conjunto de objetos
//para definir una entidad usuario, puedo hacer uso de una clase usuario
//dentro de la definicion necesito una function especial

enum PhotoOrientation {
    Landscape = 'Landscape',
    Portrait = 'Portrait',
    Square = 'Square',
    Panorama = 'Panorama',
}//para definir una clase utilizo la palabra reservada class

class Picture {
    //defino las propiedades de esta entidad
    id: number;
    title: string;
    orientation: PhotoOrientation;
    //ahora necesito definir una funcion especial para crear objetos a partir
    //de la clase Picture definido, por lo cual es necesario un constructor
    constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {//este constructor necesita
                //los atributos necesarios para crear el obj, a traves de parametros
        //la palabra reservada this me permite hacer referencia a las diferentes
        //propiedades que tiene la clase
        this.id = id;//this y el editor me muestra las posibilidades que puedo escoger
        this.title = title;//les asignamos el valor que recibimos como parametro id, title, etc
        this.orientation = orientation;
    };
    //debo definir el comportamiento que tiene mi clase, eso es mediante funciones
    // Comportamiento
    toString() {//representa en cadena mi objeto
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}
                ]`;//utilizo los backticks para lograr una cadena
    };
};

class Album {
    id: number;
    title: string;
    pictures: Picture[] = [];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        // this.pictures = [];//de esta forma inicializaria la variable
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'personal picture');
const picture: Picture = new Picture(1, 'TypeScript', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);

//clases miembros publicos
//TS define un modificador de acceso publico por defecto para los miembros de cla.
//Tambien es posible marcar un miembro como publico usando la palabra reservada public

//accediendo a los miembros publicos
picture.id = 100;//el acceso para cada uno de estos miembros es publico
//nada nos impide que podamos cambiar sus estados
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);
//TS considera un modificador de acceso denominado public por defecto para cada uno 
//de los miembros