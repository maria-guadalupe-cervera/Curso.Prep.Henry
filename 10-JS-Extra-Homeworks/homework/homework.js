// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
//Versión larga
/*  var newArray=[];
for(var clave in objeto){
  newArray.push([clave, objeto[clave]])
}
return newArray;
}*/
//Versión corta
var obj= Object.entries(objeto);
return obj;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var object={}
  for(var i=0;i<string.length;i++){
    if(!object[string[i]]){
    object[string[i]]=0;
    }
    object[string[i]]+=1;
    }
  
  return object;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //opción 1
 var upper="";
  var lower="";
  for(var i=0;i< s.length;i++){
    var mayusc=s.charAt(i);
    if(mayusc=== mayusc.toUpperCase()){
      upper+=mayusc;
    }
  }
  for(var j=0;j< s.length;j++){
    var minor=s.charAt(j);
    if(minor=== minor.toLowerCase()){
      lower+=minor;
    }
  }
  return upper+lower;
}
/*var string1= "";
var string2= "";
for(var i=0; i<s.length;i++){
  if( s[i]===s[i].toUpperCase()){string1=string1+s[i]}
  else{
    string2= string2+s[i];
  }
  return string1+ string2;
}
}
*/
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //cuando no se sabe la propiedad se pone entre []
  //obj[]= ""
/*var resultado=[]
  var array= str.split(" ")
  for(var i=0; i<array.length; i++){
    var newarray = array[i].split(" ")
    newarray =  newarray.reverse()
    resultado.push(newarray.join(" "))
  }
  return resultado.join(" ")*/
 

 var strInv= "";
 var array=[];
 for(var i=str.length-1; i>=0; i--) {
   strInv += str[i];
 }
 strInv= strInv.split(" ");
 for (var i=strInv.length-1; i>=0; i--){
array.push (strInv[i]);
} 
return array.join(" "); 
}

/* str.split("").reverse().join("").reverse().join(" ")*/
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroString= numero+"";
  var numeroSplit= numeroString.split("");
  var numeroSplitReverse= numeroSplit.reverse();

  if(numeroString===numeroSplitReverse.join("")){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}
//var numeroInvertido=""
//var str=numero.toString();
//for(var i=str.length-1;i>=0; i--){
// numeroInvertido+= str[i];
//}
//numeroInvertido=parseInt(numeroInvertido);
//  if(numero===numeroInvertido){
  //  return "Es capicua";
//}
//else{
  //return "No es capicua";
//}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace('a','');
  cadena = cadena.replace('b','');
  cadena = cadena.replace('c','');
  return cadena;

 // var arr= cadena.split("");
 // function removeItem (arr,item){
 //   var indice= arr.indexOf(item)
 //   if (indice!== -1){
 //     arr.splice(indice,1)
 //   }
 //for(var i=0; i<array.length;i++){
 //  if(arr[i]==="a"||arr[i]==="b"||arr[i]==="c"){
 //    removeItem(arr,"a")
 //    removeItem(arr,"b")
 //    removeItem(arr,"c")
  // }
 //  return arr.join(""); 
 //.filter retorna todos los elementos que contiene(cumple con una condición) con !== retorna todo lo que no contiene
 //arr.filter(function (el){
 //  return el!=="a"&& el!=="b"&&el!=="c";
 //});
// return arr.join("");
 
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (elementoActual,elementoSiguiente) {return elementoActual.length -elementoSiguiente.length })
  return arr;
}
//var sort= arr.sort(function(a,b){
//  if(a.length<b.length){
 //   return -1;
 // }
 // return 0;
//});
//}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var inter=[];
for( var i=0;i<arreglo1.length;i++){
  for(var j=arreglo2.length;j>=0;j--){
    if(arreglo1[i]===arreglo2[j]){
      inter.push(arreglo1[i]);
    }
  }
}
//inter.sort(function(a,b){
  //return a-b;
//})
return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
