"use strict";
exports.__esModule = true;
//tipos personalizados se adaptan al contexto del proyecto
//utilizanos el POO donde encontramos las interfaces
//entidades como user, album, picture and orientatio
//la forma tradicional sin tipos personalizados en este caso interfaces
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["landScape"] = 0] = "landScape";
    photoOrientation[photoOrientation["portrait"] = 1] = "portrait";
    photoOrientation[photoOrientation["square"] = 2] = "square";
    photoOrientation[photoOrientation["panorama"] = 3] = "panorama";
})(photoOrientation || (photoOrientation = {}));
;
function generatePicture(config) {
    var pic = { title: 'Default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({}); //acepta un objeto vacio porque son propiedas opcionales
console.log('picture : ', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture : ', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2012-05' }); //aca se reasigna el date
console.log('picture : ', picture);
var user; //tipo de dato user
user = { id: 10, username: 'siledangond', isPro: true }; //asignamos un obj user
console.log('user : ', user);
user.username = 'paparazzi';
// user.id = 20; //Error//no me permite reasignar, solo lectura x readonly
console.log('user : ', user); //puedo cambiar o reasignar el user
