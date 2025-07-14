 let btn1=document.querySelector("#btn1");


//  btn1.onclick =(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//      console.log(evt.target);
//       console.log(evt.clientX,evt.clientY);
//  };

btn1.addEventListener("click",()=>{
    console.log("btn1");
});
const hd3=()=>{
     console.log("btn2");
};
btn1.addEventListener("click",hd3);
// btn1.addEventListener("click",()=>{
//     console.log("btn2");
// });
btn1.removeEventListener("click",hd3);


 let div= document.querySelector("div");
 div.onmouseover=()=>{

    console.log("in div");
 };