//** ARRAYS **//


//* a)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Fifth month: "+ months [4], "Eleventh month: " + months [10]); 


//* b)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.sort();
console.log("The months in alphabetical order are: " + months);


//* c)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.unshift("New element at the beginning");
months.push("New element at the end");
console.log("The array with the added elements is: " + months);


//* d)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.pop();
months.shift();
console.log("The array with removed elements is: " + months);


//*e)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.reverse();
console.log("The list of months in inverted order is: " + months);


//*f)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("The months are: "+ months.join("-"));


//*g)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var sevenmonths = months.slice(4,11);
console.log("Months from may to november: "+ sevenmonths);







