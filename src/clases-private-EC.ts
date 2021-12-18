export {};
//TS V 3.8
//miembros privados EC
//TS tambien soporta (a partir de la v3.8) la nueva sintaxis JS
//para miembros privados: #atributo
//esta caracteristica puede ofrecer mejores garantias de
//aislamiento en miembros privados

enum PhotoOrientation {
    Landscape = 'Landscape',
    Portrait = 'Portrait',
    Square = 'Square',
    Panorama = 'Panorama',
}//para definir una clase utilizo la palabra reservada class

class Picture {
    //defino las propiedades de esta entidad
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;
    //ahora necesito definir una funcion especial para crear objetos a partir
    //de la clase Picture definido, por lo cual es necesario un constructor
    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation) {//este constructor necesita
                //los atributos necesarios para crear el obj, a traves de parametros
        //la palabra reservada this me permite hacer referencia a las diferentes
        //propiedades que tiene la clase
        this.#id = id;//this y el editor me muestra las posibilidades que puedo escoger
        this.#title = title;//les asignamos el valor que recibimos como parametro id, title, etc
        this.#orientation = orientation;
    };
    //debo definir el comportamiento que tiene mi clase, eso es mediante funciones
    // Comportamiento
    public toString() {//representa en cadena mi objeto
        return `[id: ${this.#id},
                title: ${this.#title},
                orientation: ${this.#orientation}
                ]`;//utilizo los backticks para lograr una cadena
    };
};

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];//de esta forma inicializaria la variable
    }

    public addPicture(picture: Picture) {//este es el metodo que me permite agregar fotografias
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'personal picture');
const picture: Picture = new Picture(1, 'TypeScript', PhotoOrientation.Square);
album.addPicture(picture);//con el metodo addPicture relaciones album y picture
console.log('album', album);//este obj album dado que tiene miembros privados no
//nos ofrece informacion sobre los obj que contiene o el estado de sus miembros
//private es la solucion antigua y la nueva sintaxis es #atributo (es mejor para
//encapsular la informacion)
//con private en cambio aun es posible conocer los miembros de los objetos