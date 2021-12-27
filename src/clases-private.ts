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
}//para definir una clase utilizo la palabra reservada class

class Picture {
    //defino las propiedades de esta entidad
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;
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
    private id: number;
    private title: string;
    private pictures: Picture[] = [];

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

//accediendo a los miembros publicos que ahora son privados
// picture.id = 100;//el acceso para cada uno de estos miembros es private
// //nos impide que podamos cambiar sus estados
// picture.title = 'Another title';//private
// album.title = 'Personal Activities';//private
console.log('album', album);

//miembros privados EC
//TS tambien soporta (a partir de la v3.8) la nueva sintaxis JS
//para miembros privados: #atributo
//esta caracteristica puede ofrecer mejores garantias de
//aislamiento en miembros privados
