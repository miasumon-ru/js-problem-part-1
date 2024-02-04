// Task-5:
// Generate a random number between 10 to 20.

function randomNumber () {

    // random number between 10 to 20;
    const fractionRandom = Math.random() * (60-40) + 40;

    const integerRandom = Math.floor(fractionRandom);

    console.log(integerRandom);

  
}

randomNumber ();