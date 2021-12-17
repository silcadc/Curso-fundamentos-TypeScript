export {};
//tipos personalizados se adaptan al contexto del proyecto
//utilizanos el POO donde encontramos las interfaces
//entidades como user, album, picture and orientatio

//la forma tradicional sin tipos personalizados en este caso interfaces
enum photoOrientation {
    landScape,//se definene estas constantes
    portrait,
    square,
    panorama
};

//function para mostrar una fotografia
//esta funcion tiene definido como parametro una especie de contrato de especifica la estructura de la fotografia
// function showPicture(picture: {//picture recibe un objeto con las caracteristicas de la fotografia
//             title: string,
//             date: string,
//             orientation: photoOrientation}) {//photoOrientation es un enumerado
//  console.log(`[title: ${picture.title},
//                 date: ${picture.date},
//                 orientacion: ${picture.orientation}]`);
// };
// let myPic = {//le asigno un objeto literal
//     title: 'test Title',
//     date: '2020-03',
//     orientation: photoOrientation.landScape
// };

// showPicture(myPic);//
// showPicture({//se envia un objeto anonimo
//     title: 'Test',
//     date: '2021-12',
//     orientation: photoOrientation.portrait,
//     //extra: 'test'//Error, esta propiedad adicional no se reconoce, debemos respetar la def original
// });


//Ahora para mejorar el cód anterior utilizamos las interfaces
//aplicando interfaces / personalizando tipos de datos


// interface Picture {//de esta forma el contrato es mas claro y
//     //el cod es mas facil de mantener
//     title: string;//se separan con ;
//     date: string;
//     orientation: photoOrientation
// }//esta interface toma la forma de contrato dentro de la function

// function showPicture(picture: Picture) {//ahora utilizo la interface Picture
//  console.log(`[title: ${picture.title},
//                 date: ${picture.date},
//                 orientacion: ${picture.orientation}]`);
// };
// let myPic = {
//     title: 'test Title',
//     date: '2020-03',
//     orientation: photoOrientation.landScape
// };
// showPicture(myPic);

// showPicture({//espera recibir una estructura acorde a nuestra interfaz
//     title: 'Test',
//     date: '2021-12',
//     orientation: photoOrientation.portrait,
//     //extra: 'test'//esta propiedad adicional no se reconoce, debemos respetar la def original
// });


interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: photoOrientation
}
function generatePicture(config: PictureConfig) {//la configuracion llega como un parametro llamado config
    const pic = { title: 'Default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});//acepta un objeto vacio porque son propiedas opcionales
console.log('picture : ', picture);
picture = generatePicture({title: 'Travel Pic'});
console.log('picture : ', picture);
picture = generatePicture({title: 'Travel Pic', date: '2012-05'});//aca se reasigna el date
console.log('picture : ', picture);

//interfaces de propiedad de solo lectura
//algunas propiedades de la interfaz podrian no ser modificables una vez creado el obj
//esto es posible usando readonly antes del nombre de propiedad.

// Interfaz: usuario
interface User {
    readonly id: number; //solo lectura, no puede ser reasignado por readonly
    username: string;
    isPro: boolean
}
let user: User;//tipo de dato user
user = { id: 10, username: 'siledangond', isPro: true }//asignamos un obj user
console.log('user : ', user);
user.username = 'paparazzi';
// user.id = 20; //Error//no me permite reasignar, solo lectura x readonly
console.log('user : ', user);//puedo cambiar o reasignar el user