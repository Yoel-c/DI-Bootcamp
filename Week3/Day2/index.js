//exercice 1

let favoriteFood = "Pizza";
let favoriteMeal = "Dinner";

console.log("I eat " + favoriteFood + " at every " + favoriteMeal );

// exercice 2
//part1

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length

//console.log(myWatchedSeriesLength);


const myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2]

console.log('I watched 3 series : ' + myWatchedSeriesSentence);

//part2

myWatchedSeries[2] = 'friends'

//console.log(myWatchedSeries);

myWatchedSeries.push("Fauda")

myWatchedSeries.unshift("suits")

delete myWatchedSeries[1]

const moneyHeist = myWatchedSeries[2]

console.log(moneyHeist[2]);

console.log(myWatchedSeries);

// exercice 3

const celsiusTemp = 40 ;
const farenheitemp = celsiusTemp / 5 * 9 + 32 ;

// exercice 4

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: will be 55 , 34+21
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: will be 23 , 21+2 because a change now to 2
    // Actual: 23 

    //question 3. - undefined 
    //question 4. prediction : 12  the console will read '5' as number 5 
   
    console.log(3 + 4 + '5');
    //actual : 75

// exercice 5  

 typeof(15)
// Prediction: number because definition of 15 is number 
// Actual: number

typeof(5.5)
// Prediction: number 
// Actual:number

typeof(NaN)
// Prediction: ?i dont know 
// Actual: number

typeof("hello")
// Prediction: String  
// Actual: String

typeof(true)
// Prediction: Boolean
// Actual:boolean

typeof(1 != 2)
// Prediction: true
// Actual: boolean

"hamburger" + "s"
// Prediction: humburgers -  2 string that we add 
// Actual:humburgers 

"hamburgers" - "s"
// Prediction: hamburgers 
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual:j ohnny5

"johnny" - 5
// Prediction: undefine
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false 
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual:False 



//exercice6

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1 
// Actual: 1

10 % 5
// Prediction: ?
// Actual: 0

5 % 10
// Prediction: ?
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: 'JavaScript'

" " + " "
// Prediction: noting + nothing
// Actual: ' nothing '

" " + 0
// Prediction: space 0
// Actual: space 0

true + true
// Prediction: 2 how many true i have 
// Actual: 2

true + false
// Prediction: ?
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: ?
// Actual: -1

!true
// Prediction: 
// Actual: false

3 - 4
// Prediction: -1 its calculation 
// Actual:

"Bob" - "bill"
// Prediction: ?
// Actual: NaN

