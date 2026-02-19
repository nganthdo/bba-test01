let playerName = "Mario";
const currentLives = 3;
const coins = {
    level1: 25,
    level2: 30,
    level3: 45,
};

// Total coins of 3 levels
totalCoins = 0;
function calculateTotalCoins(){
    for (let i in coins){
        totalCoins += coins[i];
    }
    return totalCoins;
}
console.log("Total coins of 3 levels: ", calculateTotalCoins());
// Average
let averageCoins = totalCoins / 3;
console.log("Average coins: ", averageCoins);

/*
let remainder = totalCoins % 3;
console.log("Remainder coins: ", remainder);
*/

//print remainder coins after total coin devides by 3
function printRemainder(){
    let remainder = totalCoins % 3; 
    return remainder;
}
console.log("Remainder: ", printRemainder());