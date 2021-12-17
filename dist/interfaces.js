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
function showPicture(picture) {
    console.log("[title: ".concat(picture.title, ",\n                date: ").concat(picture.date, ",\n                orientacion: ").concat(picture.orientation, "]"));
}
;
var myPic = {
    title: 'test Title',
    date: '2020-03',
    orientation: photoOrientation.landScape
};
showPicture(myPic);
showPicture({
    title: 'Test',
    date: '2021-12',
    orientation: photoOrientation.portrait
});
