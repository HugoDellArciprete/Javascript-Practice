//** FOR  **//


//* a)

var fiveWords = ["coffee", "tea", "milk", "water","beer"];
for (var i=0; i < fiveWords.length; i++) {
  alert (fiveWords [i]);
}


//* b)

for (var i=0; i < fiveWords.length; i++) {
  fiveWords [i]= fiveWords [i].toUpperCase().substring(0,1) + fiveWords[i].substring(1);
  alert (fiveWords [i]);
}


//* c)

var sentence = "";
for (var i=0; i < fiveWords.length; i++) {
  sentence = sentence + "" + fiveWords [i];
}    
alert ("The string sentence is: " + sentence);

//* d)

var numbersfrom0to9 = [];
for (var i=0; i < 10; i++) {
  numbersfrom0to9 = numbersfrom0to9 + "" + i;
}
console.log("The final array is: " + numbersfrom0to9);






