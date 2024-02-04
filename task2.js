// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


// const numbers = [5,6,11,5,12,98];

// function repeatedNumberInArray (numbers){

//     const repeatedNumberArray = [];

//     let mySet = new Set();

//     let repeated ;

//     for(let number of numbers){

//         if(mySet.has(number)){

//              repeated = number;

//         }
//         else{

//          mySet.add(number);
        
//         }
//     }

//     console.log(mySet);

//     for(num of numbers){
//         if(num === 5){
//             repeatedNumberArray.push(num);
//         }
      
//     }

//     console.log('the repeated number length  is :', repeatedNumberArray.length );

//     return  repeated;

// }

// console.log( 'the repeated number is  :',  repeatedNumberInArray(numbers));



const numbers = [5,6,11,5,12,98];

function repeatedNumberInArray (numbers){

    const repeatedCount = []; 
    const repeatedCount2 = []; 

    if(numbers.includes(5) === true){
        for ( number of numbers){

            if(number === 5){
                repeatedCount.push(number);
            }

        }
    }
    else if (numbers.includes(25) === true ){

        if(number === 25){
            repeatedCount.push(number);
        }
        

    }

    console.log('the number of 5 in the array is :', repeatedCount.length);
    console.log('the number of 25 in the array is :', repeatedCount2.length);


}

repeatedNumberInArray(numbers);