/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 10;

if (votingAge >= 18) {
  console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let numOne = 15;
let numTwo = 16;

// console.log('before:', numTwo);

if (numOne < numTwo) {
  numTwo = 20;
}

// console.log('after:', numTwo);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

// console.log(Number('1999'));

//Task d: Write a function to multiply a*b

function multiply(a, b) {
  return a * b;
}

// console.log(multiply(5, 7));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(age) {
  return age * 7;
}

// console.log(dogYears(20));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

function dogFeeder(weight, age) {
  if (age < 1) {
    if (age < 0.25) {
      return weight * 0.1;
    } else if (age < 7 / 12) {
      return weight * 0.05;
    } else {
      return weight * 0.04;
    }
  } else if (age >= 1) {
    if (weight < 5) {
      return weight * 0.05;
    } else if (weight <= 10) {
      return weight * 0.04;
    } else if (weight <= 15) {
      return weight * 0.03;
    } else {
      return weight * 0.02;
    }
  }
}

// console.log(dogFeeder(15, 1));

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function rockPaperScissors(myPick) {
  let computerPick = Math.floor(Math.random() * 3);
  if (computerPick === 0) {
    computerPick = 'scissors';
  } else if (computerPick === 1) {
    computerPick = 'rock';
  } else if (computerPick === 2) {
    computerPick = 'paper';
  }
  console.log('our pick: ', myPick, 'their pick: ', computerPick);
  if (myPick === 'scissors') {
    if (computerPick === 'scissors') {
      return 'You tied!';
    } else if (computerPick === 'paper') {
      return 'You win!';
    } else if (computerPick === 'rock') {
      return 'You lose!';
    }
  } else if (myPick === 'rock') {
    if (computerPick === 'rock') {
      return 'You tied!';
    } else if (computerPick === 'scissors') {
      return 'You win!';
    } else if (computerPick === 'paper') {
      return 'You lose!';
    }
  } else if (myPick === 'paper') {
    if (computerPick === 'paper') {
      return 'You tied!';
    } else if (computerPick === 'rock') {
      return 'You win!';
    } else if (computerPick === 'scissors') {
      return 'You lose!';
    }
  }
}

// console.log(rockPaperScissors('paper'));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function toMiles(km) {
  return km * 0.621371;
}

// console.log(toMiles(5));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function toCentimeters(ft) {
  return ft * 30.48;
}

// console.log(toCentimeters(2));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(num) {
  for (let i = num; i > 0; i--) {
    console.log(`${i} bottles of soda on the wall, ${i} bottles of soda`);
    console.log('take one down, pass it around');
    console.log(`${i - 1} bottles of soda on the wall...`);
  }
}

// console.log(annoyingSong(10));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalculator(num) {
  if (num > 90 && num <= 100) {
    return 'A';
  } else if (num > 80 && num < 90) {
    return 'B';
  } else if (num > 70 && num < 80) {
    return 'C';
  } else if (num > 60 && num < 70) {
    return 'D';
  } else if (num > 0 && num < 60) {
    return 'F';
  } else {
    return 'Please give a number between 0 and 100';
  }
}

console.log(gradeCalculator(121516691));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
