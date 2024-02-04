

const biryaniKhor = ['abul', 'kabul', 'cabul', 'abul', 'kabul', 'jabul ', 'cabul'];

const numbers = [ 10, 20, 30, 10, 20, 10, 40];

function noDuplicate (array){

    console.log(array);

    const unique = [];

    for (const element of array){
        console.log(element);

        if(unique.includes(element) === false){
            unique.push(element);
        }
    }

    return unique;



}

console.log(noDuplicate(biryaniKhor));
console.log(noDuplicate(numbers));

