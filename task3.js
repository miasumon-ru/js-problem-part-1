// Task-3:
// Write a function to count the number of vowels in a string.

function countVowel (str){
    console.log(str)

    let numberOfVowel = [];

    let a = 'a';
    let e = 'e ';
    let i = 'i';
    let o = 'o';
    let u = 'u';

    for (let i = 0; i < str.length; i++){
        let letter = str[i];
        console.log(letter);

        if ( letter === a ||  letter === e ||  letter === i ||  letter === o ||  letter === u){

            numberOfVowel.push(letter);

        }
    }

    const length = numberOfVowel.length;
    
    console.log('vowels are :', numberOfVowel);

    return length;

}

console.log('the number of vowels is :', countVowel ('miasumon'));