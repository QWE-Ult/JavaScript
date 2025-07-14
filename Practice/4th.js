// let name= prompt("enter your full name");
// let username=(`@${name}`+name.length);

// console.log(username);

// let arr = [1,2,3,4,5];
// let sum=0;
// for(let mark of arr){
//   sum+=mark;
// }
// let avg= sum/arr.length;
// console.log(avg);

// let arr = [250, 645, 300, 900, 50];

// let final = 0;
// for(i=0;i<arr.length;i++){
//  let off=arr[i]/10;
// arr[i]-=off;
// }
// console.log(arr);

// let companies = ["B","M","U","G"];
// companies.shift();

// companies.splice(2,1,"O");
// companies.push("A");
// console.log(companies);

// function name(){
//   let msg=prompt("enter your word").toLowerCase();
//   let counter=0;
//   for (i=0;i<msg.length;i++){

//   if(msg[i]==="a" || msg[i]==="e"|| msg[i]==="i" || msg[i]==="o" || msg[i]==="u"){
//     counter++;
//   }
// }
// console.log(counter);

// }
// name();

// const name = () => {
//   let msg = prompt("enter your word").toLowerCase();
//   let counter = 0;
//   for (i = 0; i < msg.length; i++) {
//     if (
//       msg[i] === "a" ||
//       msg[i] === "e" ||
//       msg[i] === "i" ||
//       msg[i] === "o" ||
//       msg[i] === "u"
//     ) {
//       counter++;
//     }
//   }
//   console.log(counter);
// };
// name();

// let arr = [1, 2, 3, 4];

// arr.forEach((val) => {
//   console.log(val * val);
// });

// let marks = [67, 87, 98, 99, 65, 30, 90];

// let newmarks = marks.filter((val) => {
//   return val >= 90;
// });
// console.log(newmarks);

// let n = prompt("give us any number");

// let arr = [];

// for (i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }

// console.log(arr);

// const resultSum = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(resultSum);

// const resultMul = arr.reduce((res, curr) => {
//   return res *     curr;
// });
// console.log(resultMul);

// let h = document.querySelector("h2");
// console.dir(h.innerText);

// h.innerText = h.innerText + "from me";

// let divs = document.querySelectorAll(".box");

// divs[0].innerText = "new unique valiue1";
// divs[1].innerText = "new unique valiue2";

// let divs = document.querySelectorAll(".box");
// let idx=1;

// for(div of divs){
//   div.innerText=`new unique value ${idx}`;
//   idx++
// }

let el = document.createElement("button");
el.innerText = "Click me";
el.style.color = "white";
el.style.backgroundColor = "red";
document.querySelector("body").prepend(el);
