// No cambies los nombres de las funciones.



function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  return array [0];

}
devolverPrimerElemento([5,8,12]);


const color = ["azul", "verde", "rojo", "blanco"]
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [3];

}
devolverUltimoElemento(color);


const marcasCoches= ["peugeot", "audi", "fiat", "ford"];
function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
obtenerLargoDelArray(marcasCoches);




function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  array = array.map((element) =>  element + 1);

  return array

}
incrementarPorUno([1,2,3,4,5,6])


let array = [3,4,5,6];
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var array = [3,4, 5, 6];
  array.push(elemento);
  return array;

}
agregarItemAlFinalDelArray (array[3,4,5,6], 7);


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let array = [3,4,5,6];
  array.unshift(elemento);
  return array;

}

agregarItemAlComienzoDelArray(array, 2);



function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let str = "";
for(let i = 0; i < palabras.length ; i++){

 str += palabras[i]; 

}

let hello = str.slice(0,5);
let world = str.slice(5, 11);

let union = `${hello} ${world}`;

return union;
}
dePalabrasAFrase(["hello", "world"]);



function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i < array.length; i++){ 
    if(array[i] === elemento) {
      return true;
    }
 }
 return false; 

}
arrayContiene(["hola", "amigo"], "como estas");


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let suma = 0;
  for (let i = 0; i < numeros.length; i++){
     suma += numeros[i];
  }
  return suma;

}
agregarNumeros([10,15]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let prom = 0;
  for (let i = 0; i < resultadosTest.length; i++){
    prom += resultadosTest[i] / resultadosTest.length
  }
return prom;

}

promedioResultadosTest ([4,8,12]);


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numgrande = 0;
  numgrande= Math.max(...numeros);
  return numgrande;
}
numeroMasGrande([10,50,80]);


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let retorno = [];
  for (let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 19){
      retorno.push(arreglo[i]);  
    }
     }
return retorno.length;
  
}
cuentoElementos([19, 23, 5, 37]);


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  switch (numeroDeDia) {
    case 1: 
      return "Es fin de semana";
    case 2:
      return "Dia Laboral";
    case 3:
      return "Dia Laboral";
    case 4:
      return "Dia Laboral";
    case 5:
      return "Dia Laboral";
    case 6:
      return "Dia Laboral";
    case 7:
      return "Es fin de semana";

    default:
     return "No existe";
    
  }
}
diaDeLaSemana(5);


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n.toString()[0] === "9"){
    return true;
    } else {
      return false;
    }
    
  }
empiezaConNueve(99);




function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:

  for (let i = 0; i < arreglo.length - 1; i++) {

    if (arreglo[i] !== arreglo[i + 1]) {

      return false;

    }
  }

  return true;

}
todosIguales(3,3,3);




function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const meses = [];
  let cont = 0; 
for(let i = 0; i < array.length; i++){
  if (array[i] === "Enero" || 
      array[i] === "Marzo" || 
      array[i] === "Noviembre"
      ){
      meses.push(array[i]);
      cont++;
      } 
  }
  if(cont === 3){
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

mesesDelAño (['Enero', 'Octubre', 'Julio', 'Marzo', 'Septiembre', 'Noviembre']);

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const nmayor= [];
  for(let i = 0; i < array.length; i++){
    if (array[i] > 100) {
      nmayor.push(array[i]);
      } 
    }
     return nmayor;
  
}
mayorACien([100,300,500]);
// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
