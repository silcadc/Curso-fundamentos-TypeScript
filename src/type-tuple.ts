export {};//esto para evitar que el compilador crea que duplique
//las variables que use en otros archivos
//esta tuple podria guardar un number y string[1, 'juli']
let user: [number, string];
user = [1, 'Silena'];
console.log('user', user);//tengo un arreglo con dos tipos de datos
//como accedo
console.log('username', user[1]);
console.log('id', user[0]);
console.log('username.length', user[1].length);

//Tuplas con varios valores
//id, username, isPro
let userInfo: [number, string, boolean];//para definir tuplas es muy importamte
//que los tipos sean diferentes en cada una de las posiciones /es una restriccion
userInfo = [2, 'david', true];
console.log('userInfo', userInfo);

//arreglo de tuplas
let array: [number, string][] = [];//consideramos los tipos de datos y lo inicializamos
//si no, habra un error
array.push([1, 'alberto']);//puedo agregar diferentes tipos
array.push([2, 'mateo']);
array.push([3, 'marcos']);
console.log('array', array);

//uso de funciones de la clase array
//marcos --> marcos001//modificar el username
//tengo que llegar a la posicion y editar
array[2][1] = array[2][1].concat('001');//function concat es propia de string
console.log('array', array);
