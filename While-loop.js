/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

let a =[];
while(a < 60 ){
    console.log('single day for next 60' )
        a++;
}

/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
let num =61;
while(num < 100){
//    console.log(num);
   num++;
   if( num % 2 !== 0){
    console.log('odd number', num)}

else{
    console.log('evenNum',num)
}
}



/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let sum2 = 0;
 let i2 = 206;
let sum = 0;
let i = 81;
while (i < 131){
    if (i % 2 === 0)
        console.log('even number', i);
        sum += i;
    i++;}
    
    while (i2 < 311)
    {
        if (i2 % 2 !== 0)
            console.log('odd number', i2);
        sum2 += i2;
        i2++;
        }
        console.log(sum);
        console.log(sum2);

    

    /***
As Ersa is learning now, she wants to explore more and more. 
Tell Ersa to generate a multiplication table for number 5
 */
let number = 5;
let m = 1;

console.log("Multiplication Table for " + number);
while (m <= 10) {
    console.log( number + " x " + m + " = " + (number * m));
    m++;
}

/***
Implement a countdown timer that counts down from 21 to 15.
 */
let count = 21;
let intervalId = setInterval(() =>  {
    console.log(count);
    count--;

if (count < 15){
    clearInterval(intervalId);}
},1000);