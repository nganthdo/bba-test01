const { create } = require("node:domain");

// bài 1
function createCharacters() {
    let arrObjects = [
        {
            name: 'Mario',
            level: 1,
            health: 100
        },
        {
            name: 'Kingdom',
            level: 50,
            health: 500
        }
    ];
    let charactersPowerUp = arrObjects.map(char => ({ name: char['name'].toUpperCase(), level: char['level'] * 2, health: char['health'] * 3 }));
    return charactersPowerUp;
}
console.log(createCharacters());

// trả về mảng có health > 1000
let possibleWinners = createCharacters().filter(char => char.health > 1000);
console.log("Possible Winners: ", possibleWinners);

// bài 2
const players = [
    {
        name: "Mario",
        score: 1000
    },
    {
        name: "Luigi",
        score: 900
    },
    {
        name: "Peach",
        score: 850
    },
    {
        name: "Yoshi",
        score: 800
    },
    {
        name: "Phong",
        score: 500
    }

];
function printLeaderboard(players) {
    players.sort((a, b) => b.score - a.score);
    return players;
}
const createLeaderBoard = printLeaderboard(players);
//console.log (createLeaderBoard);
console.log("Desc score: ");
createLeaderBoard.forEach(function (value, index) {
    index += 1;
    if (index == 1) {
        console.log("🥇" + index + ". " + value.name + " - " + value.score + "pts");
    } else if (index == 2) {
        console.log("🥈" + index + ". " + value.name + " - " + value.score + "pts");
    } else if (index == 3) {
        console.log("🥉" + index + ". " + value.name + " - " + value.score + "pts");
    } else {
        console.log(" " + index + ". " + value.name + " - " + value.score + "pts");
    }
})