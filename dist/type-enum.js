//orientacion para fotografias
//pata definir valores para la orientacion de mis fotografias
//lo normal es definir algunas constantes
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
//Pero en Typescript podemos representar los valores numericos
//como si fueran un nuevo tipo de dato
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["landscape"] = 0] = "landscape";
    photoOrientation[photoOrientation["portrait"] = 1] = "portrait";
    photoOrientation[photoOrientation["square"] = 2] = "square";
    photoOrientation[photoOrientation["panorama"] = 3] = "panorama";
})(photoOrientation || (photoOrientation = {}));
var landscape = photoOrientation.landscape;
console.log('1.landscape', landscape);
console.log('2.landscape', photoOrientation[1]);
