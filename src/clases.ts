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
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;
    //ahora necesito definir una funcion especial para crear objetos a partir
    //de la clase Picture definido, por lo cual es necesario un constructor
    public constructor(id: number,
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
    public toString() {//representa en cadena mi objeto
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}
                ]`;//utilizo los backticks para lograr una cadena
    };
};

class Album {
    public id: number;
    public title: string;
    public pictures: Picture[] = [];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
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

//clases miembros publicosel acceso para cada uno de estos miembros es p
//TS define un modificador de acceso publico por defecto para los miembros de la.
//Tambien es posible marcar un miembro como publico usando la palabra reservada public

//accediendo a los miembros publicos
picture.id = 100;//ublico
//nada nos impide que podamos cambiar sus estados
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);
//TS considera un modificador de acceso denominado public por defecto para cada uno
//de los miembros, tambien puedo ser explicita indicando la palabra reservada public

//que tan conveniente es mantener el acceso publico a los atributos o funciones de la clase?
//hay escnarios donde no dberia ser asi.
//para eso existen los miembros privados

//clases miembros pivados
//TS define una manera propia de declarar o marcar un miembro como privado usando la
//palabra reservada private