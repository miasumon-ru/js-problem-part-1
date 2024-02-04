// convert inch to feet , miles to kilometer.

// 12 inch > 1 feet

function inchToFeet (inch){
    const feet = inch/12;
    return feet;
}

console.log(inchToFeet(75));

function inchToFeet2 ( inch ){
    const feetFraction = inch/12;

    const feetNumber  = parseInt(feetFraction);
    console.log(feetNumber);

    const inchRemaining = inch%12;
    
    const result = feetNumber + ' feet ' + inchRemaining + ' inch'
    console.log(result);
}

const shuvoHeight = inchToFeet2(75);
console.log(shuvoHeight);

// miles to kilometer

function milesToKilo (miles){
    const kilometer = miles * 1.61;
    
    return kilometer;
}

console.log(milesToKilo(5));