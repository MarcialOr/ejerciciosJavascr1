//vamos ir practicando con ejercicio simples

// Ejercicio1
//dado un array de enteros sumar los
//elementos pares y devolver si está suma
//es mayor a 20

function sumarpares(){
    let numeros = [15,40,20,57,25,17];
    let sumapares = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0){
            sumapares += numeros[i]
        }
    
        if(sumapares >= 20){
            console.log("La suma de los pares es mayor a 20: "+sumapares)
        }else{
            console.log("La suma es menor a 20: "+ sumapares)
        }
    }
}

/*Given2 strings, a and b, return a strng of the
form short+long+short, with the shorter string on 
the outside and the longer string on inside*/
function shortlongshort(){
    let string1 = "22";
    let string2 = "1";
    
    if (string1.length < string2.length){
        console.log("El string2 es mas largo: "+ string1+string2+string1)
    }else{
        console.log("El string1 es mas largo: "+string2+string1+string2)
    }
}


/*
FIZZBUZZ

escribir un programa que imprima los numeros del 
1 al 100

si el numero es multiplo de 5 imprima buzz

si el numero es multiplo de 3 imprima fizz

si es multiplo de ambpos imprima fizzbuzz

caso contrario imprimir el numero
*/

function fizzbuzz(){
    for(let i = 1; i < 101; i++){
        if(i % 5 == 0){
            console.log("Buzz")
        }else if(i % 3 == 0){
            console.log("Fizz")
        }else if(i % 5 == 0 && i % 3 == 0){
            console.log("Fizzbuzz")
        } else{
            console.log(i)
        }
    }
}

//fizzbuzz();

function fizzbuzzArr(){
    let numeros = [15,40,20,57,25,17];
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] % 5 == 0 && numeros[i] % 3 == 0){
            console.log("Buzz")
        }else if(numeros[i] % 5 == 0){
            console.log("Fizz")
        }else if(numeros[i] % 3 == 0){
            console.log("Fizzbuzz")
        } else{
            console.log(numeros[i])
        }
    }
}

//fizzbuzzArr();


//Hecho por Jairo
function FizzBuzzArray(arr) {
    let arraycito = [];
    for (let num = 0; num <= arr.length - 1; num++) {
        if (arr[num] % 3 == 0 && arr[num] % 5 == 0) {
            arraycito.push("FizzBuzz");
        } else if (arr[num] % 5 == 0) {
            arraycito.push("Buzz");
        } else if (arr[num] % 3 == 0) {
            arraycito.push("Fizz");
        } else {
            arraycito.push(arr[num]);
        }
    }
    console.log(arraycito);
}

//FizzBuzzArray([1,2,3,4,5,6,7,15,18,21]);


//Crear una funcion que toando un array de enteros y un numero limite
//Devolver un array qe contenga solo numeros mayores a el numero limite
/*>Bueno lo primero que haria seria recibir el arreglo
y el numero limite

en este punto tenemos que recorrer el arreglo y tenemos
que guardar en otro arreglo temporal todos los numeros que sean
mayores al numero limite.

debemos de revisar con un if dentro de la posicion 
*/




function arreNumMayor(arre, x){
    let arraycito = [];
    for(let i = 0; i <= arre.length; i++){
        if(arre[i]>=x){
            arraycito.push(arre[i]);
        }
    }
    console.log(arraycito)
}

let x = 6;
arre = [1,2,3,4,5,6,7,15,18,21];

//arreNumMayor(arre, x);


function arrayNumMayor(arre, x){
    let largor = arre.length;
    let contador=0;
    arraycito = [];

    while(contador<largor){
        if(arre[contador]>=x){
            arraycito.push(arre[contador]);
        }
        contador++;
    }
    return arraycito;
}


imprimir = arrayNumMayor(arre,x);
console.log(imprimir)

// hacerlo con metodos ahora con filter
function arrNumMayorFilter(arre,x){
    return arrayNumMayor.filter(numero => numero > x);
}

//Hacerlo con MAP

let arr1 = [1,2,3,4];

arr1.map((valor)=>{valor > 1 ? console.log("El valor es mayor"): console.log("El valor es menor");})

/** Ejercicio 1: Suma de elementos pares
 * Escribe una funcion que reciba un array de numeros y devuelva
 * la suma de los elementos que son pares 
 * 
 * tratar de resolver con MAP
*/

function sumaPares(arre){
let suma = 0;
    for (let i = 0; i <= arre.length; i++){
        if(arre[i] % 2 == 0){
            suma += arre[i];
        }
    }

    return suma;
}
arre = [1,2,3,4,5,6,7,15,18,21];
impr=sumaPares(arre)
console.log(impr)
//30 respuesta

//Con MAP
function sumaParesMap(arre){
    let suma = 0;
    arre.map((valor)=>{if(valor % 2 == 0){suma += valor};})
    return suma;
}
arre1 = [1,2,3,4,5,6,7,15,18,21];
impr1=sumaParesMap(arre1)
console.log(impr1)

/**
 * Ejercicio 3: Encontrar elemento maximo
 * 
 * recorrer el arreglo y ver el numero maximo entre un array de numeros
 * 
 * primero tenemos que recorrerlo
 * primera_posicion > posicion_siguiente
 * 
 * 2  4  5  6  10  1
 * 
 * 0
 * prime_posicion = 2 >  posicion_sigui = 4
 * temp_mayor = posicion_sigui 4
 * 
 * i++
 * 1
 * 
 * temp_mayor = 4 
 *  
 */


function maximo(arre){

    let temp_mayor=0;

    for(let i = 0; i < arre.length-1; i++){
        if(temp_mayor < arre[i]){
            temp_mayor = arre[i];
        }/**
        else if(arre[i+1] > temp_mayor){
            temp_mayor = arre[i+1]
        }        
        */
    }
    console.log(temp_mayor)
}
//tempo_mayor > arre[0]
//     0  >   1 Falso
//       arre[i+1]
arre2 = [1,2,3,80,5,6,70,15,18,21];
//maximo(arre2)

/**
 * Ejercicio 4
 * 
 * Crear una funcion que tome un array de numeros y un numero multiplcador.
 * la fucnion devover un numero array donde cada elemento del array
 * original este multiplicando por el numero dado.
 * 
 * arre multiplo
 * 
 * tengo que recorer cada posicion del array y multiplicar el multiplo
 * por lo que esta dentro del array.
 * 
 * primero un for
 * dentro del for entrar en cada posicion y multiplicar
 * 
 * retornar arre
 */

function multiNumeros(arre,x){
    let multiplo= [];
    for(let i = 0; i <= arre.length-1; i++){
        multiplo.push(arre[i]*x);
    }
    return multiplo;
}

arre3 = [1,2,3,80,5,6,70,15,18,21];
//console.log(multiNumeros(arre3,2));

function multiNumerosMap(arre,x){
    let multiplo = arre.map((valor)=>{valor*x})
    return multiplo;
}

arre4 = [1,2,3,80,5,6,70,15,18,21];
//console.log(multiNumerosMap(arre4,2));

/**
 * Ejercicio 5
 * 
 * eliminar numeros duplicados
 * crear una funcion que elimine los elementos duplicados de un array
 * 
 * necesitamos dos arreglos un arreglo para el original y otro para el
 * nuevo arreglo a retornar sin numeros duplicados
 * 
 * dentro de un for vamos a rcorrer el arreglo, para analizar todos los 
 * numeros si alguno se repite
 */

function elimDupplicados(arre){
    let nuevoArre = [];
    for(let i = 0; i < arre.length; i++){
        let estaEnNuevo = false;
        for(let j = 0; j < nuevoArre.length; j++){
            if(nuevoArre[j] == arre[i]){
                estaEnNuevo = true;
            }
        }
        if(!estaEnNuevo){
            nuevoArre.push(arre[i]);
        }
    }
    return nuevoArre;
}
arre5 = [1,2,3,80,5,6,2,15,18,2];

impri5 = elimDupplicados(arre5);
console.log(arre5);
console.log(impri5);


/** Ejericico 6
 * 
 * Crear una funcion que cuente cuantas veces aparece un 
 * elemento especifico en un array
 * 
 * necesito como parametros el numero que quiero encontrar 
 * 
 * tambien necesito el arreglo a utilizar al que se debe de buscar  
 * cuantas veces se repite dentro del mismo
 */

function cuentaElemento(arre,x){
    contador = 0;
    for(let i = 0; i <= arre.length;i++){
            if(x == arre[i]){
                contador++;
            }
    }
    return contador
}
arre6 = [1,2,3,80,5,6,2,15,18,2];
x = 2;
impri6 = cuentaElemento(arre6,x);

console.log(impri6);

function cuentaElementoWhile(arre,x){
    contador = 0;
    i = 0;
   while(i <= arre.length){
       if(x == arre[i]){
           contador++;
       }
       i++;
   }
   return contador;
}
arre7 = [1,2,3,80,5,6,2,15,18,2,2];
x = 2;
impri7 = cuentaElemento(arre7,x);

console.log(impri7);

/**
 * Ejercicio 7
 * 
 * Fiiltrar palabras por longitud
 * escribe una funcion que tome un array de palabras y un numero de
 * longitud. la funcion deberia devolver un nuevo array que contenga 
 * solo las palabras que tiene una longitud mayor o igual al numeor
 * dado
 */

function filtrarPalabras(arre,x){
    let nuevoArre = [];
    for(let i = 0; i < arre.length; i++){
        if(arre[i].length >= x){
            nuevoArre.push(arre[i]);
        }
    }
    return nuevoArre;
}

arre8 = ["hola","mundo","hola123","adios","adios123"];
impri8 = filtrarPalabras(arre8,5);
console.log(impri8);
