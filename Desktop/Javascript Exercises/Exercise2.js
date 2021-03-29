//** STRINGS **//


//* a)

var word1 = "dictionaries";
wordUpper = word1.toUpperCase();
console.log("The word dictionaries to upper case: " + wordUpper);


//* b)

var string1 = "instability";
var newString = string1.substring(0, 5);
console.log("The new string of 5 letters is: " + newString);


//* c)

var string2 = "gravitomagnetic";
var shortString = string2.substring(12, 15);
console.log("The new string of 3 letters is: " + shortString);


//* d)

var aString = "sInGUlArity";
var aNewString = aString.substring(0,1).toUpperCase()+aString.substring(1,11).toLocaleLowerCase();
console.log("The new string with upper and lower case is: " + aNewString);


//* e)

var stringWithSpace = "memento mori";
var theSpace = stringWithSpace.indexOf(" ");
console.log("The position of the space in the string is: " + theSpace);


//* d)

var longWords = "gRaviTOMagneTIc insTABIlitY";
var longWordsChange = longWords.substring(0,1).toUpperCase()+longWords.substring(1,15).toLocaleLowerCase()
+ " " + longWords.substring(16,17).toUpperCase()+longWords.substring(17,27).toLocaleLowerCase();
console.log("The long words with upper and lower cases are: " + longWordsChange);














