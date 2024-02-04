
// 1 ) create a function that takes an array as a parameter
// 2 ) identify the odd numbers from that array and do the sum  of that odd numbers

function oddAvg (numbers){

    const odds = [];
    let sum = 0;
    
    for(const number of numbers){
        if (number % 2 !==0){

            odds.push(number);
                      
        }
    }
    
    for (let odd of odds){
        sum = sum + odd;
    }

    const length = odds.length;

    console.log('the length of odd number is :', length);

    console.log('the sum is :', sum);

    const avg = sum / length;

    return avg;

}

const numbers = [ 1, 2, 3, 4, 5, 6];

const average = oddAvg ( numbers);

console.log(average);
