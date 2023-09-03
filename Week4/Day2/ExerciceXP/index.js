//Exercise 1 : Information

//part 1.

function infoAboutMe(){
    console.log("my name is Yoel");
}

//infoAboutMe()

//part2

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("you name is " + personName, "you are " + personAge + " years old" , "your favorite color is " +  personFavoriteColor);
}

//infoAboutPerson("david", 45 , "blue")
//infoAboutPerson("josh" , 12 , "yellow")


//Exercice 2 : Tips

function calculateTip(){
    let Bill = Number (prompt("how much is the bill ?"));
    let tip 

    if ( Bill < 50 ) {tip = Bill * 0.20} ;

    if ( 50 < Bill && Bill < 200 ) { tip = Bill * 0.15};
   
    if (Bill > 200) {tip = Bill * 0.10};
        
    console.log(tip,Bill+tip);
    
}

//calculateTip()

//Exercise 3 : Find The Numbers Divisible By 23

function isDivisble(){
    let sum = 0
    for (let i = 0; i < 500 ; i++) {
       if( i % 23 === 0 ){  
        console.log(i); 
        sum = sum + i   
       }  
    }
    console.log(sum);

}

//isDivisble()


// Exercise 4 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana","orange","apple"]
        
function myBill(){

    for (const item of shoppingList){
        const quantityInStock = stock[item]
        
        if( quantityInStock > 0){
            const priceF = prices[item]  
            console.log("price of ", item, "is" , priceF)
        } else {
            console.log("no ", item, " in stock" );
        }
        
    }

 
}

//myBill()

//Exercise 5 : What’s In My Wallet ?


function changeEnough(itemPrice, amountOfChange){


}

function HowMuchIhave (arr){
    
    

}


//changeEnough()

//exercice 6:Vacations Costs

//1.

function hotelCost(){
     const NumberOfNight = prompt("how many night you want to stay in hotel ?")
     const nightPrice = NumberOfNight*140
     if(isNaN(NumberOfNight) || !NumberOfNight){
       return hotelCost();
     }

    else { console.log(nightPrice);  }
     
}
//hotelCost()


//2.

function planeRideCost(){
    const Destination = prompt("Where you want to go ?")
    
    if(!isNaN(Destination) || !Destination){
       return planeRideCost();
     }
     else if (Destination == "Paris"){
        console.log("the price to go to Paris is : 220$")
        return "220"
        
     }
     else if (Destination == "London"){
         console.log("the price to go to London is : 183$")  
         return "183"
        }
     else{
        console.log("The price of your trip will be : 300$")
        return "300" 
     }

}

planeRideCost()

//3.

function rentalCarCost(){
    const daysOfRent = prompt("how many days you want to rent the car ?")
    const costDaysOfRent = daysOfRent*40
    const moreTenDays = costDaysOfRent*0.95
    if(isNaN(daysOfRent) || !daysOfRent){
        rentalCarCost();
    }
    else if (daysOfRent < 10 ){
        alert(costDaysOfRent);
    }else {
        alert(moreTenDays);

    }
}

//rentalCarCost()


//4.

/*function totalVacationCost(){
    const hotelPrice =  hotelCost().return
    const planePrice = planeRideCost().return
    const carPrice = rentalCarCost().return
  

}
*/
//totalVacationCost()

   