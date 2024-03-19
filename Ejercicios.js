/*Escriba una función que retorne la suma de una serie de X número repetido hasta el n-ésimo término.
Entrada:numero= 3, terminos= 5
Salida:


Entrada: numero= 5, terminos= 3
Salida:
*/


var num1 = 3  // defino unas variables al numero 3 y 5
var num2 = 5


function sumar (num1)  // ejecución de una función  en este caso sumar
{
    let resultado;
    resultado = num1 + (  33 + 333 + 3333 + 33333);
    return resultado;
}
console.log("3 + 33 + 333 + 3333 + 33333 ="+ + sumar(num1)); // se visualiza en consola la suma de la variable


function sumar2 (num2)
{
    let resultado2;
    resultado2 = num2 + ( 55 + 555);
    return resultado2;
}
console.log("5+ 55 + 555="+ + sumar2(num2));

/*Dada una lista de cualquier longitud de entrada, escriba una función para agrupar los elementos similares en una matriz
de salida (no importa el orden).


Entrada: list = [12, 25, 1, 1, 7, 25]
Salida: [[12], [7], [25, 25], [1, 1]]


Entrada : list = [6, 7, 8, 9]
Salida : [[6], [7], [8], [9]]
*/




function agruparElementos(lista) {
    let grupos = {};


   
    for (let elemento of lista) {
        // Verificar si el elemento ya está en un grupo
        let encontrado = false;
        for (let grupo in grupos) {
            if (grupos[grupo][0] === elemento) {
                grupos[grupo].push(elemento);
                encontrado = true;
                break;
            }
        }
        // Si no se encuentra en ningún grupo existente, crear un nuevo grupo
        if (!encontrado) {
            grupos[elemento] = [elemento];
        }
    }


    //  grupos definido en una matriz
    let resultado = [];
    for (let grupo in grupos) {
        resultado.push(grupos[grupo]);
    }


    return resultado;
}




console.log(agruparElementos([12, 25, 1, 1, 7, 25]));
console.log(agruparElementos([6, 7, 8, 9,]));

