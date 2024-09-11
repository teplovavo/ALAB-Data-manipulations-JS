// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;




// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;


// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid1 = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid1);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//---------------------part 1----math problems-------------

//all numbers are divisible by 5
const By5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(By5);

//if the first number is larger than the last
const iflarger = n1 > n4;
console.log(iflarger);

//arithmetic chain
const result = ((n2 - n1) * n3) % n4;
console.log (result);

//Change the way that isOver25 calculates    
//const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
const UnderOrEqual25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
const isValid = isSum50 && isTwoOdd && UnderOrEqual25 && isUnique;
console.log(" no number larger then 25" + UnderOrEqual25);




//--------------------part 2-----MATH---------------
const distance = 1500;
const fuelbudget = 175;
const averagefuelcost = 3; //$ per gallon
//cars fuel:
const speed55 = 30; //miles per gallon
const speed60 = 28; //miles per gallon
const speed75 = 23; //miles per gallon

//1 How many gallons of fuel will you need for the entire trip?
const gallons55= distance / speed55;
    console.log('Gallons needed at speed 55: ' + gallons55);

const gallons60= distance / speed60;
    console.log('Gallons needed at speed 60: ' + gallons60);

const gallons75= distance / speed75;
    console.log('Gallons needed at speed 75: ' + gallons75);

//2 Will your budget be enough to cover the fuel expense?
const cost55 = gallons55 * averagefuelcost;
    console.log('Cost at 55 mph: $' + cost55);
const cost60 = gallons60 * averagefuelcost;
    console.log('Cost at 60 mph: $' + cost60);
const cost75 = gallons75 * averagefuelcost;
    console.log('Cost at 75 mph: $' + cost75);

const budget55 = fuelbudget >= cost55;
    console.log('Budget at 55: ' + budget55);
const budget60 = fuelbudget >= cost60;
    console.log('Budget at 60: ' + budget60);
const budget75 = fuelbudget >= cost75;
    console.log('Budget at 75: ' + budget75);

//3 How long will the trip take, in hours?
const mph55 = 55;
const mph60 = 60;
const mph75 = 75;

const time55 = distance / mph55;
    console.log('Time at 55: ' + time55);

const time60 = distance / mph60;
    console.log('Time at 60: ' + time60);

const time75 = distance / mph75;
    console.log('Time at 75: ' + time75);

    //------
    console.log('Summary:');
    console.log('At 55 :' + gallons55 + ' gal, cost ' + cost55 + ', time ' + time55 + ' hr, budget: ' + budget55);
    console.log('At 60 :' + gallons60 + ' gal, cost ' + cost60 + ', time ' + time60 + ' hr, budget: ' + budget60);
    console.log('At 75 :' + gallons75 + ' gal, cost ' + cost75 + ', time ' + time75 + ' hr, budget: ' + budget75);
    

