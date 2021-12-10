//orientacion para fotografias
//pata definir valores para la orientacion de mis fotografias
//lo normal es definir algunas constantes
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

//Pero en Typescript podemos representar los valores numericos
//como si fueran un nuevo tipo de dato
enum photoOrientation{
    landscape,
    portrait,
    square,
    panorama
}
const landscape: photoOrientation = photoOrientation.landscape;
console.log('1.landscape', landscape);
console.log('2.landscape', photoOrientation[1]);
