//Task 1: Using forEach()

let favoriteCities = ["Seattle", "Tashkent", "Termez", "Saint Louis", "Washington, D.C."];
favoriteCities.forEach(upperCaseCity => {
    console.log(`My number #${favoriteCities.indexOf(upperCaseCity) + 1} favorite city is ${upperCaseCity}`);
});

//Task 2: Transforming with map()

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(sqrtNum => sqrtNum * sqrtNum);
console.log(`\nRegular numbers: ${numbers}. \nSquared numbers: ${squares}`);


//Task 3: Filtering with filter()

let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(`\nScores: ${scores} \nHigh scores: ${highScores}`);

//Task 4: Finding with find() and findIndex()

let favoriteFood = ["Pilaf", "Sushi", "Pizza", "Dumplings", "Samsa"];
let foodWith4Letters = favoriteFood.find(food => food.length > 4);
let indexOfThatFood = favoriteFood.findIndex(foodIndex => foodIndex.length > 4);
console.log(`\nFirst food with more than 4 letters: ${foodWith4Letters}\nIndex of this food: ${indexOfThatFood}\n`);