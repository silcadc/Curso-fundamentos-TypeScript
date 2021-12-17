export {};
//la herencia es un mecanismo para reutilizar cod.
//las interfaces pueden extenderse unas de otras. Esto permite copiar los
//miembros ya definidos en una interfaz o tra, ganando flexibilidad
//y reusabilidad de componentes
enum PhotoOrientation{//nuestro enumerado
  Landscape,
  Portrait,
  Square,
  Panorama
}

//*Herencia de interfaces
// interface album {//creamos una interfaz para representar un obj album
//   id: number;//el id y el title es repetido en la interface picture
//   title: string;
// };

// interface picture {//tenemos esta otra entidad que comparte
//   //algunos atributos con album
//   id: number;//el id y el title es repetido en la interface album
//   title: string;
//   orientation: PhotoOrientation//como podemos mejorar nuestro cod y reducir
//   //las lineas de cod, para eso hacemos la herencia con interfaces
// };

interface Entity {//para la herencia con interfaces, utilizo la palabra reservada
  //Entity, de esta manera guardo los atributos que se comparten en las anteriores interfaces
  id: number;//luego a las interfaces les agrego la palabra reservada extends y entity
  title: string;//para indicar que heredan los atributos de la interfaz Entity
};

interface Album  extends Entity{//esta interfaz era la que esta arriba
  //*Copia de los atributos de Entity
  description: string;
};

interface Picture extends Entity {//esta interfaz era la que esta arriba
  orientation: PhotoOrientation;
};

//para probar mi cód
const album: Album = {//album es una variable a la que se le asigna la 
  //interfaz Album como tipo de dato
  id: 5,//estas caracteristicas son sugeridas de antemano por el editor ya que conoce
  title: 'Meetups',//la herencia de las interfaces
  description: 'Community events around the world'//solo descripcion no es heredada
};

const picture: Picture = {//picture es la variable, le asigno una interfaz Picture 
  //como tipo de dato
  id: 10,//el edito me sugiere los datos, yo decido el valor
  title: 'Family',
  orientation: PhotoOrientation.Square
};

//reasignamos nuestros atributos
let newPicture = {} as Picture;//aca utilizo la asercion de tipos, sintaxis= variable as type
newPicture.id = 2;
newPicture.title = 'Moon';
//mostramos el estado de los objetos
console.log(album);
console.table({album});//en consola puedo ver tablas
console.table({picture});
console.table({newPicture});