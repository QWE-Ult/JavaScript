// let num=prompt("enter your number upto which you want even no");

// for(i=0;i<=num;i++){
//   if (i % 2 === 0) {
//     console.log(i); // prints only even numbers
//   }
// }

let rand=25;

let numb=prompt("guess the number");

while(numb!=rand){
   numb= prompt("you guessed wrong , guess again");
}

    console.log(`YOU RE correct ${rand}`);
