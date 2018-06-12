/*String Methods allow you to work with strings.  */  

/*Let's practice some string methods. Don't forget to console.log your results and run node REPL in the terminal.*/

/*The string.length property returns the number of characters in the string.
*/

/*1. Declare a variable named `howManyLetters` and find out how many letters are in the given string below. Console.log your result.*/
console.log("1-----------------------------------------------------")
var longestPlaceName = "Taumatawhakatangihangakoauauotamateaturipukakapiki- maungahoronukupokaiwhenuakitanatahu";  //Yes, this is a real place located in Porangahau, Central Hawke's Bay.
var howManyLetters=longestPlaceName.length;

console.log(longestPlaceName);
console.log(howManyLetters);

/*Next, concatenate and console.log the following phrase:
"x is the longest place name in the world and has y letters in its name."
where x represents the value at `longestPlaceName` and y represents the value at `howManyLetters`*/
console.log("1a-----------------------------------------------------")
var longestPlaceName = "Taumatawhakatangihangakoauauotamateaturipukakapiki- maungahoronukupokaiwhenuakitanatahu";  //Yes, this is a real place located in Porangahau, Central Hawke's Bay.
var howManyLetters=longestPlaceName.length;

console.log(longestPlaceName+" is the longest place name in the world and has "+ howManyLetters +" letters in its name.");
//Another way to concat... "stringname".concat("  ","verbage, blah, blah");
var text="longestPlaceName".concat(" ","is the lon");
console.log(text);


/*2. Declare a variable named `fifthLetter` and find out which letter is in the 5th position in the string below. Console.log your result.*/
/*The string.charAt() method returns the character at the specified index (position).*/

console.log("2--------------------------------"); 
  var iDidntKnow = "The national animal of Scotland is the Unicorn";
  var fifthLetter=iDidntKnow.charAt(5);
  console.log(fifthLetter);
 



/*3. Declare a variable named `worldLocator` and find the index (position) of the word "world" in the string below. Console.log your result.*/
/*The indexOf() method returns the index (position) of the first occurence of a specified text in a string.*/
console.log("3-----------------------------------------------------")

var randomFact = "All pandas in the world are on loan from China.";
var worldLocator=randomFact.indexOf("world");
console.log(worldLocator);




/*4. Declare a new variable named `scissorHand` that will generate a new string "are afraid" from the existing string below. Console.log your result.*/
/*The slice() method extracts a part of a string and returns the extracted part into a new string. This method takes 2 parameters: the starting index (position) and the ending index (position)*/
console.log("4-----------------------------------------------------");

var edward = "People are afraid of me because I am different";
var scissorHand= edward.slice(7,17);
console.log(scissorHand);


/*The replace() method replaces a specified value with another value in a string.*/

/*5. Declare a new variable named `theSifu` that will change the current string from "In order to taste my cup of water you must first fill your cup." to "In order to taste my cup of water you must first empty your cup."; Console.log your result.*/

/*The replace() method replaces a specified value with another value in a string.*/

console.log("5-----------------------------------------------------");
var grasshopper = "In order to taste my cup of water you must first fill your cup.";
var theSifu=grasshopper.replace("fill","empty");
console.log(theSifu);




/*6. Declare a variable named `smallKine` that will convert the string below to all lower case. Console.log your result.*/
/*The toLowerCase() method converts the characters in a string to lower case.*/

console.log("6-----------------------------------------------------");
var bigTime = "BRUuHHHH, I AM DA GreaTest!";
var smallKine= bigTime.toLowerCase();
console.log(smallKine);



/*7. Declare a variable named `bigBand` that will convert the string below to all upper case. Console.log your result.*/
/*The toUpperCase() method converts the characters in a string to upper case.*/

console.log("7-----------------------------------------------------");
var bandName = "the beatles";
var bigBand=bandName.toUpperCase();
console.log(bigBand);




/*8. Declare a variable named `oreoList` that will convert the string below into an array of strings. Console.log your result.*/
/*The split() method converts a string into an array, by separating the string into substrings.*/
console.log("8-----------------------------------------------------");

var oreos = "red velvet, cookie dough, peanut butter, banana split, birthday cake";
console.log("this is a string: "+oreos);
var oreoList=oreos.split(","); // this shows where to split... on commas dash or |... must be quoted
console.log("This is an Array: "+oreoList);
console.log("This is #2 od the array:"+oreoList[2]);



/*9. Declare a variable named `favDrink` and extract "gin" from the string below. Console.log your result.*/

/*The substr() method is similar to slice(). The difference is that the second parameter specifies the length of the extracted part. The 2 parameters: the starting index (position) and the length of the extracted part. */

console.log("9-----------------------------------------------------");
  
var drinkMenu = "rum, gin, vodka, kool-aid, haterade";
var favDrink= drinkMenu.substr(5,3);
console.log(favDrink);
