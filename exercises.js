/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/
/*
if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};
*/


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a
 * parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 *
 * The function will return true if the number passed
 *  into the function is equal to or greater than 
 * Hawaii's voting age. Console.log your result.
*/


console.log("1--------------------------");
function canVote(age){
if(age>=18){
  return "You can vote";
}else{
  return "Sorry, no can vote";
}
};

console.log(canVote(11));
console.log("2---------------------------");
/*
 * #2
 * Function - login
 * Create a function named `login` which will take a 
 * parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login
 *  Success!", if the string passed into the function
 * is "test1234"
 * Console.log your result.
*/
function login(password){
  if(password==="test1234"){
    return "Login success";
  }else{
    return "wrong, try again";
  }
  
}
console.log(login("test1234"));
console.log("3--------------------------");
/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will
 * take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number 
 * is greater than the second.
 * Console.log your result.
*/

function isGreaterThan(first,second){
  if(first>second){
    return true;
  }else{
    return false;
  }
}
console.log(isGreaterThan(1,2));
console.log("---------------------------");
/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will
 *  take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed
 *  into the function is "true".
 * Console.log your result.
*/
console.log("4--------------------------");
function mustBeTrue(boo){
  if(boo===true){
    return true;
  }else{
    return false;
  }
}
console.log(mustBeTrue(false));

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take
 *  a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big
 *  Bird!", if the string passed into the function is
 *  a three-letter word. 
 * Console.log your result.
*/
console.log("5---------------------------");
function bigBird(word){
  if(word.length ==3){
    return "word to Big Bird"
  }else{
    return "word length in not 3 characters"
  }
}
console.log(bigBird("birr"));
/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" 
 * Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/
console.log("6---------------------------");
function isEqual(first,second){
if(first===second){
  return "You look mahvelous"
}else{
  return "I don't know who you are anymore"
}
}

console.log(isEqual("bob","boob"));
/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract.
 * " Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/
console.log("7---------------------------");

function notEqual(first,second){
if(first === second){
  return "opposites do attract";
}else{
  return "Cause its like you are my mirror";
}
}  

console.log(notEqual("cat","caat"));
/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100,
 *  otherwise it will return false.
 * Console.log your result.
*/ 
console.log("8---------------------------");

function spareChange(money){
  if(money>100){
    return true;
  }else{
    return false;
  }
}

console.log(spareChange(150));
/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30,
 *  otherwise it will return false.
 * Console.log your result.
*/ 

console.log("9---------------------------");
function dirty30(one,two,three){
  sum=one+two+three;
  console.log("sum is :"+ sum);
  if(sum>30){
    return true;
  }else{
    return false;
  }
}

console.log(dirty30(1,2,30));
/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it 
 * will return false.
 * Console.log your result.
*/ 
console.log("10---------------------------");

function evenSteven(num){
  var half=num%2
  if(half===0){
    return true;
  }else{
    return false;
  }
}

console.log(evenSteven(10));


/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the 
 * Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the
 *  street."
 * Console.log your result.
*/ 
console.log("11---------------------------");

function daClub(cover,age){
  if (cover && age >=21){
    return "welcome to the legends lounge";
  }else{
    return "Cheese is across the street";
  }
}


console.log(daClub(22,22));
/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, 
 * then the function will return the message: "Congratulations on a job well done." Otherwise,
 *  return the message: "See you in summer school."
 * Console.log your result.
*/ 
console.log("12---------------------------");

function graduation(credits,thesis){
  if(credits>=120 || thesis==true){
    return "Congrats, well done"
  }else{
    return "see u in summer school"
  }
}
console.log(graduation(110,true));

/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number 
 * value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", 
 * if the number value is less than 100, and return the message: "Now you ballin' in the 
 * Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 
console.log("13---------------------------");

function moneyTrain(speed){
  if(speed<50){
    return "honolulu rail";
  }else if(speed<100){
    return "amtrak"
  }else{
    return "shinkansen"
  }
}

console.log(moneyTrain(160));
/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 

console.log("14a---------------------------");


var budget=22;
var doughnutPrice=5; 
var doughnutBought=0;
function buyDoughnut(){

    if(budget>doughnutPrice){
      return " Budget is now: $" + budget+ "you have " + doughnutBought +"doughnuts";
      
    }else{
      return "you dont have enough money for a doughnut"
    }
  }      
      
console.log(buyDoughnut());
/*Final Boss*/
/*Create a function name dailySpecials which takes in a parameter: `special`.
Inside the function, create a switch statement that will check the daily specials of your favorite restaurant (or make up your own daily specials for each day of the week.*/



/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/
console.log("14---------------------------");
var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log 
 * the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/
console.log("15---------------------------");

for(var i=1; i<=5; i++){
  console.log("Player:"+ i)
}

/* 
 * #16
 * Create a for loop that will iterate and console.log each item
 *  in the array below:
*/
console.log("16---------------------------");

var myFavFoods = ["lemon bar", "carrot cake", "nachos", 
"bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];
console.log(myFavFoods.length);
for (var i=0; i<myFavFoods.length;i++){
  console.log(myFavFoods[i]);
};


/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an 
 * array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number
 * value of 0.
 * 
 * Create a function named sumItUp which takes a parameter:
 *  `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in
 *  the array that is passed into the function and return the 
 * total.
 * Console.log your result.
*/
  
console.log("17---------------------------");

var numArray=[10,20,30,40,50];
//var count=0
//var arrayLength=numArray.length;
//console.log(arrayLength);
//console.log(numArray[1]);

function sumItUp(arr){
  var total=0;
  for(var i=0; i < arr.length; i++ )
  {
    console.log[i]; 
    var subtotal=numArray[0]+[1];
    var numArray=numArray.shift;
    return subtotal; 
  }
}
console.log(sumItUp(numArray));
console.log("17b---------------------------");

var numArray = [22, 33, 44, 55, 66];

function sumItUp(arr){
  var total = 0;
  for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
    total += arr[i]; // total = total + arr[i];
  }
  return total;

}

console.log("sumitup ", sumItUp(numArray));




/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed
 *  players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 
console.log("18---------------------------");


var players = ["Yao Ming", "BrookLin", " Jesus Shuttlesworth", "Manute Bol", "Sidney Deane", "World B Free"];
console.log(players);
var east=[];
var west=[];

function allStars(ballers){
  for(var i=0; i<ballers.length;i++){
    console.log(ballers[i]);
      if(i%2===0){
      east.push(ballers[i]);
      }else{
      west.push(ballers[i]);
      }
  }
}    
  allStars(players);

  console.log("East: ",east);
  console.log("West: ",west);


/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 
console.log("18---------------------------");

var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

function subways(special){
  for(var i=0;i<special.length;i++){
    //console.log(special);
    if(i%2!==0){
      special.splice(i, 1, "Classic Tuna"); 
      special[i] = "Classic Tuna";
      }
    }
   return special;
}

console.log(subways(subOftheDay));


/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't 
 * want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/
console.log("20---------------------------------------------")

var phrase = "An apple a day keeps Alice feeling awesome!";
var phraseArray=[];
var aArray=[];
function removeLetter(str){
  for(var i=0;i<str.length;i++){
    //console.log(str);
    if(str[i]==="a" || str[i]==="A"){
      aArray.push(str[i]);
    }else{
      phraseArray.push(str[i]);

    }
    
  }
  return phraseArray
}

removeLetter(phrase);

console.log(phraseArray);
/*
/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/
/*
if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};
*/


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a
 * parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 *
 * The function will return true if the number passed
 *  into the function is equal to or greater than 
 * Hawaii's voting age. Console.log your result.
*/


console.log("1--------------------------");
function canVote(age){
if(age>=18){
  return "You can vote";
}else{
  return "Sorry, no can vote";
}
};

console.log(canVote(11));
console.log("2---------------------------");
/*
 * #2
 * Function - login
 * Create a function named `login` which will take a 
 * parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login
 *  Success!", if the string passed into the function
 * is "test1234"
 * Console.log your result.
*/
function login(password){
  if(password==="test1234"){
    return "Login success";
  }else{
    return "wrong, try again";
  }
  
}
console.log(login("test1234"));
console.log("3--------------------------");
/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will
 * take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number 
 * is greater than the second.
 * Console.log your result.
*/

function isGreaterThan(first,second){
  if(first>second){
    return true;
  }else{
    return false;
  }
}
console.log(isGreaterThan(1,2));
console.log("---------------------------");
/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will
 *  take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed
 *  into the function is "true".
 * Console.log your result.
*/
console.log("4--------------------------");
function mustBeTrue(boo){
  if(boo===true){
    return true;
  }else{
    return false;
  }
}
console.log(mustBeTrue(false));

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take
 *  a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big
 *  Bird!", if the string passed into the function is
 *  a three-letter word. 
 * Console.log your result.
*/
console.log("5---------------------------");
function bigBird(word){
  if(word.length ==3){
    return "word to Big Bird"
  }else{
    return "word length in not 3 characters"
  }
}
console.log(bigBird("birr"));
/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" 
 * Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/
console.log("6---------------------------");
function isEqual(first,second){
if(first===second){
  return "You look mahvelous"
}else{
  return "I don't know who you are anymore"
}
}

console.log(isEqual("bob","boob"));
/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract.
 * " Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/
console.log("7---------------------------");

function notEqual(first,second){
if(first === second){
  return "opposites do attract";
}else{
  return "Cause its like you are my mirror";
}
}  

console.log(notEqual("cat","caat"));
/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100,
 *  otherwise it will return false.
 * Console.log your result.
*/ 
console.log("8---------------------------");

function spareChange(money){
  if(money>100){
    return true;
  }else{
    return false;
  }
}

console.log(spareChange(150));
/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30,
 *  otherwise it will return false.
 * Console.log your result.
*/ 

console.log("9---------------------------");
function dirty30(one,two,three){
  sum=one+two+three;
  console.log("sum is :"+ sum);
  if(sum>30){
    return true;
  }else{
    return false;
  }
}

console.log(dirty30(1,2,30));
/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it 
 * will return false.
 * Console.log your result.
*/ 
console.log("10---------------------------");

function evenSteven(num){
  var half=num%2
  if(half===0){
    return true;
  }else{
    return false;
  }
}

console.log(evenSteven(10));


/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the 
 * Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the
 *  street."
 * Console.log your result.
*/ 
console.log("11---------------------------");

function daClub(cover,age){
  if (cover && age >=21){
    return "welcome to the legends lounge";
  }else{
    return "Cheese is across the street";
  }
}


console.log(daClub(22,22));
/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, 
 * then the function will return the message: "Congratulations on a job well done." Otherwise,
 *  return the message: "See you in summer school."
 * Console.log your result.
*/ 
console.log("12---------------------------");

function graduation(credits,thesis){
  if(credits>=120 || thesis==true){
    return "Congrats, well done"
  }else{
    return "see u in summer school"
  }
}
console.log(graduation(110,true));

/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number 
 * value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", 
 * if the number value is less than 100, and return the message: "Now you ballin' in the 
 * Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 
console.log("13---------------------------");

function moneyTrain(speed){
  if(speed<50){
    return "honolulu rail";
  }else if(speed<100){
    return "amtrak"
  }else{
    return "shinkansen"
  }
}

console.log(moneyTrain(160));
/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 

console.log("14a---------------------------");


var budget=22;
var doughnutPrice=5; 
var doughnutBought=0;
function buyDoughnut(){

    if(budget>doughnutPrice){
      budget=budget - doughnutPrice;
      doughnutBought= doughnutBought+1;
      return " Budget is now: $" + budget+ "you have " + doughnutBought +"doughnuts";
    }else{
      return "you dont have enough money for a doughnut"
    }
  }      
      
console.log(buyDoughnut());
/*Final Boss*/
/*Create a function name dailySpecials which takes in a parameter: `special`.
Inside the function, create a switch statement that will check the daily specials of your favorite restaurant (or make up your own daily specials for each day of
     the week.*/

console.log("14b---------------------------");

function dailySpecials(special){
    switch (special){
    case "monday":
        menu="fried Bologna";
        break;
    case "tuesday":
        menu="turkey neck";
        break;
    case "wednesday":
        menu= "curry spam";
        break;
    case "thursday":
        menu="dagwood sammich";
        break;
    case "friday":
        menu="fried twinkie";
        break;

    }
return menu;
}

console.log(dailySpecials("tuesday"));


/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/
console.log("Toyoa Example---------------------------");
var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log 
 * the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/
console.log("15---------------------------");

for(var i=1; i<=5; i++){
  console.log("Player:"+ i)
}

/* 
 * #16
 * Create a for loop that will iterate and console.log each item
 *  in the array below:
*/
console.log("16---------------------------");

var myFavFoods = ["lemon bar", "carrot cake", "nachos", 
"bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];
console.log(myFavFoods.length);
for (var i=0; i<myFavFoods.length;i++){
  console.log(myFavFoods[i]);
};


/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an 
 * array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number
 * value of 0.
 * 
 * Create a function named sumItUp which takes a parameter:
 *  `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in
 *  the array that is passed into the function and return the 
 * total.
 * Console.log your result.
*/
  
console.log("17---------------------------");

var numArray=[10,20,30,40,50];
//var count=0
//var arrayLength=numArray.length;
//console.log(arrayLength);
//console.log(numArray[1]);

function sumItUp(arr){
  var total=0;
  for(var i=0; i < arr.length; i++ )
  {
    console.log[i]; 
    var subtotal=numArray[0]+[1];
    var numArray=numArray.shift;
    return subtotal; 
  }
}
console.log(sumItUp(numArray));
console.log("17b---------------------------");

var numArray = [22, 33, 44, 55, 66];

function sumItUp(arr){
  var total = 0;
  for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
    total += arr[i]; // total = total + arr[i];
  }
  return total;

}

console.log("sumitup ", sumItUp(numArray));




/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed
 *  players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 
console.log("18---------------------------");


var players = ["Yao Ming", "BrookLin", " Jesus Shuttlesworth", "Manute Bol", "Sidney Deane", "World B Free"];
console.log(players);
var east=[];
var west=[];

function allStars(ballers){
  for(var i=0; i<ballers.length;i++){
    console.log(ballers[i]);
      if(i%2===0){
      east.push(ballers[i]);
      }else{
      west.push(ballers[i]);
      }
  }
}    
  allStars(players);

  console.log("East: ",east);
  console.log("West: ",west);


/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 
console.log("18---------------------------");

var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

function subways(special){
  for(var i=0;i<special.length;i++){
    //console.log(special);
    if(i%2!==0){
      special.splice(i, 1, "Classic Tuna"); 
      special[i] = "Classic Tuna";
      }
    }
   return special;
}

console.log(subways(subOftheDay));


/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't 
 * want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/
console.log("20---------------------------------------------")

var phrase = "An apple a day keeps Alice feeling awesome!";
var phraseArray=[];
var aArray=[];
function removeLetter(str){
  for(var i=0;i<str.length;i++){
    //console.log(str);
    if(str[i]==="a" || str[i]==="A"){
      aArray.push(str[i]);
    }else{
      phraseArray.push(str[i]);

    }
    
  }
  return phraseArray
}

removeLetter(phrase);

console.log(phraseArray);
