//typescript me permite definir una variable
//para gestionar un conjunto de datos
//puedo usar [], o los genericos <>

//corchetes []
//inicializar=declarar+asignar
//tipo explicito
let users: string[];//declaro la variable
users = ['silena', 'carolina', 'dangond'];//asigno el arreglo
console.log('users_1', users);
//users = [1, true, 'test'];//error puesto que mi tipo es string
//el compilador detecta el tipo de dato que he asignado

//tipo inferido
let otherUsers = ['silena', 'carolina', 'dangond'];//inicializo la variable con el arreglo
//inmediatamente el compilador infiere su tipo string
//otherUsers = [1, true, 'test'];//error puesto que mi tipo es string

// Array <TIPO>
let pictureTitles: Array<string>;//de esta forma usando los genericos defino el tipo
pictureTitles = ['favorite sunset', 'vacation time', 'landscape'];

// Cómo acceder a los valores de un arreglo?
// TypeScript soporta el uso de indices para acceder
// a una posicion especifica dentro de un arreglo
console.log('first user', users[0]);//puedo acceder a su posicion mediante indice
console.log('first title', pictureTitles[0]);

// Tambien puedo procesar los arreglos como objetos
//consultar una propiedad o hacer uso de alguna
//funcion dentro de un arreglo

//Propiedades en Array
console.log('users.length', users.length);//el mismo editor sugiera muchas propiedades
//existentes en los arreglos. Ej:conocer el tama;o del arreglo

// Tambien puedo hacer uso de funciones en Arrays como con JS
users.push('Carreno');//Agregar nuevos datos al arreglo existente
console.log('users_2', users);
users.sort();//ordenar el arreglo con .sort
console.log('users_3', users);//nombres de usuarios ordenados alfabeticamente