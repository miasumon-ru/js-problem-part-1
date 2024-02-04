// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

const str = ' I am learning Programming to become a programmer';

// function toFindLongestStr (){

//     let lengthStore = [];
  
//     console.log(str);

//      let words = str.split(' ');

//     //  console.log( Math.max(words))
    

//      console.log(words);

//      for (let word of words){

//         let length = word.length;

//         lengthStore.push(length);


//         console.log('the word is :', word, ' and the length of the word is : ', word.length)
//      } 

//      console.log(lengthStore);

//      const highestLength = Math.max(...lengthStore);
//      console.log(highestLength);

// }

// toFindLongestStr(str)

function toFindLongestStr2 (str){

    let longestWord = '';

    let words = str.split(' ');

    console.log(words);

    for (let word of words){
        // console.log(word)
        if( word.length > longestWord.length){
            longestWord = word;
        }
    }

    return longestWord;


}

console.log(toFindLongestStr2(str));
