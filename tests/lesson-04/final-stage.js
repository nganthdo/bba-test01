// cặp số không trùng nhau.
// console.log("Cặp số không trùng nhau:");
function findPairsDevisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            if ((i + j) % 17 === 0 && i !== j) {
                console.log("(" + i + "," + j + ") = " + (i + j));
                count++;
            }
        }
    }
    console.log("Total pairs devisible by 17:", count);
}
findPairsDevisibleBy17();

/*
// cặp số trùng nhau
console.log("Cặp số trùng nhau:");
function findPairsDevisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                console.log("(" + i + "," + j + ") = " + (i + j));
                count++;
            }
        }
    }
    console.log("Total pairs devisible by 17:", count);
}
findPairsDevisibleBy17();
*/
