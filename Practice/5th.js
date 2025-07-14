let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
  console.log("btn was clicked");
};

let div = document.querySelector("#div");

div.onmouseover = (e) => {
  console.log("inside");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};
