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

/** TAREA 2
 * Ejercicios 
 * Crear una funcion que en base a la edad que ingreso el usario
 * devolver un ensaje si la persnoa es mayor de edad o no.
 * utilizar para la condicion el operador ternario.
 */

function esMayorDeEdad(edad){
    (edad>=18)? console.log("Mayor de edad"):console.log("Menor de edad");
  }
  
  esMayorDeEdad(7);

  /**
   * Ejercicio 2
   * 
   * Crear una función que determine la nota final de un alumno, 
   * la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, 
carnet y nota final
   */

function notasAlumnos(examen,tareas,asistencia,investigacion,nombre,carnet){
    suma=0;
    if(examen<=20 && tareas<=40 && asistencia<=10 && investigacion<=30){
      suma = examen+tareas+asistencia+investigacion;
      console.log("Datos del estudiante: "+nombre+" "+carnet+" Nota final: "+ suma)
    }else{
      console.log("Revise bien la suma de las notas se pasa de 100!")
    }
  }
  
  notasAlumnos(20,40,10,30,"Marcial Ordoñez",61251277)

/**
 * Ejercicio 3
 * 
 * calcular el aumento de trabajador tomando en cuenta la tabla
 * de categorias de aumento. para este ejercicio debera de asignar
 * las siguientes variables: nombre, salario, categoria y aumento.
 * debera demostrar los daos del empleado y el aumneto salarial
 * 
 */

function aumentoSalrio(nombre,salario,categoria){
    aumento = 0;
    salarioTotal = 0;
    switch (categoria) {
        case "A":
            aumento = salario * 0.15;
            salarioTotal = salario + aumento;
          console.log("15% de aumento: "+ salarioTotal);
          break;
        
          case "B":
            aumento = salario * 0.30;
            salarioTotal = salario + aumento;
          console.log("30% de aumento: "+salarioTotal);
          break;
        
          case "C":
            aumento = salario * 0.10;
            salarioTotal = salario + aumento;
          console.log("10% de aumento: "+salarioTotal);
          break;
        
          case "D":
            aumento = salario * 0.20;
            salarioTotal = salario + aumento;
          console.log("20% de aumento: "+salarioTotal);
          break;
    
        default:
          console.log("Error al ingresar la categoria A,B,C y D ");
      }    
}
aumentoSalrio("Marcial Ordoñez ",2500,"C");

/**
 * Ejercicio 4
 * 
 * crear una funcion que en base a 2 numeros enteros que ingrese el
 * usuario, calcular cual numero es el mayor y devolverlo.
 */
function numeroMayor(a,b){
    if(a == b){
        console.log("Los numeros son iguales!")
    }
    else if(a > b){
        console.log("Numero 1 es mayor: "+a);
    }else{
        console.log("Numero 2 es menor: "+b);
    }
}

numeroMayor(10,10);

/**
 * Ejercicio 5
 * 
 * Realizar una función para una tienda de coches en donde 
 * se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de 
descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10%
y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado 
y el descuento que se
aplicara en base a lo que selecciono el usuario
 */

function ventaCarro(carro){
    descuento = 0;
    precioFinal =0;
    switch(carro){
        case "FORD FIESTA":
            descuento = 2500 * 0.05;
            precioFinal = 2500 - descuento;
        console.log("FORD FIESTA precio normal: "+2500+" precio con descuento: "+precioFinal);
        break;
            
        case "FORD FOCUS":
            descuento = 2500 * 0.10;
            precioFinal = 2500 - descuento;
        console.log("FORD FOCUS precio normal: "+2500+" precio con descuento: "+precioFinal);
            break;
            
        case "FORD ESCAPE":
            descuento = 2500 * 0.20;
            precioFinal = 2500 - descuento;
        console.log("FORD ESCAPE precio normal: "+2500+" precio con descuento: "+precioFinal);
            break;
            
        default:
        console.log("No existe esa clase de FORD!")
    }
}

carro = "FORD FIESTA"
ventaCarro(carro);

/**
 * Ejercicio 6
 * 
 * Crear una Función para calcular el descuento en viajes turísticos 
 * tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y 

como destino 
La costa del Sol, el
descuento será de 5%, 
si el destino es 

Panchimalco el descuento será 
del 10% y si el destino
es 

Puerto el Triunfo el descuento será del 15%.
 */

function viajes(){
    
    descuento = 0;
    
    console.log("a que ciudad se dirige :");
    console.log("1. Ciudad de Palma ");
    console.log("2. Salir");
    ciudad = prompt("a que Ciudad: ");
    //Escogiendo la Ciudad para entrar el destino
    if(ciudad == 1){
        console.log("Escoge tu viaje con un numero: ")
    console.log("1. Destino a La costa del Sol ")
    console.log("2. Destino a Panchimalco ")
    console.log("3. Destino a Puerto el Triunfo")
    console.log("4. Salir");
    destino = prompt("Destino: ")
    
        if(destino == 1){
        descuento = 100*0.05; 
        console.log("Destino: "+destino+" Descuento: "+descuento+" valor: "+100+" valor final: "+(100-descuento))
    }else if(destino == 2){
        descuento = 100*0.10; 
        console.log("Destino: "+destino+" Descuento: "+descuento+" valor: "+100+" valor final: "+(100-descuento))
    }else if(destino == 3){
        descuento = 100*0.15; 
        console.log("Destino: "+destino+" Descuento: "+descuento+" valor: "+100+" valor final: "+(100-descuento))
        }else{
            console.log("Gracias, que tengas un buen dia, Dios te bendiga.")
        }        
    }else{
        console.log("Escoger la ciudad correcta por favor!")
    }
}

viajes();

/**
 * Ejercicio 7
 * 
 * Se realiza la carga de 10 valores enteros por teclado.
 * Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
 */

function ciclos(){
    arre = [];
    num = 0;
    negativos = 0;
    positivos =0;
    multi15 = 0;
    pares = 0;
    
    for(let i = 0; i < 10; i++){
        num = parseInt(prompt((i+1)+" "+"Ingrese sus numeros: "));
        if(num < 0){
            negativos++;        
        }if(num > 0){
            positivos++;
        }if(num % 15 == 0){
            multi15++;        
        }if(num % 2 == 0){
            pares += num;         
        }
    }
    console.log("Cantidad de negativos: "+negativos);
    console.log("Cantidad de positivos: "+positivos);
    console.log("Cantidad de Multipl15: "+multi15);
    console.log("Acumulador de pares  :"+pares);
}

ciclos()

/**
 * Ejercicio 8
 * 
 * Escriba un programa que muestre la tabla de multiplicar del 
 * 1 al 10 del número ingresado
por el usuario.
 */

function tablaMulti(n){
    multi=0;
    for(let i = 1; i < 11;i++){
        multi = n * i;
        console.log(multi);
    }
}

tablaMulti(5);

/**Ejercicio 9
 * 
 * Crear programa donde se introduce una temperatura en Celsius y 
 * salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá 
devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
 */

function temepraturaCaF(c){
    F = (c * (9/5)) + 32;
    if(F>=14&&F<=32){
        console.log("Temperatura baja: "+F);
    }else if(F>=32&&F<=68){
        console.log("Temperatura adecuada: "+F);
    }else if(F>=68 && F<=96){
        console.log("Temperatura alta: "+F);
    }else{
        console.log("Temperatura desconocida: "+F);
    }
}

temepraturaCaF(0);

/**Ejercicio 10
 * 
 * Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos
tiene un
promedio de edades mayor.
 */