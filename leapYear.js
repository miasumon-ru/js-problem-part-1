
// simple logic for leap Year 

function isLeapYear ( year){
    if(year % 4 === 0){
        return true;
    }
    else {
        return false;
    }
}

const year = isLeapYear(2052);
console.log(year);


// 1) for a leap year , the year should not be divisible by 100 and divisible by 4
// 2) for a leap year , the year should be divisible by 100 and divisible by 400

function isLeapYear2 ( year ){
    if(year % 100 !==0 && year % 4 === 0){
        return true;
    }
    
    else if (year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
       
    
}

const isLeap = isLeapYear2(2100);
const isLeap1 = isLeapYear2(2400);
const isLeap2 = isLeapYear2(1900);
const isLeap3 = isLeapYear2(2052);

console.log(isLeap , isLeap1, isLeap2,  isLeap3)