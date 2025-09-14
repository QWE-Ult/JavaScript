const url = "https://catfact.ninja/fact";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const gf = async () => {
  console.log("getting facts.....");
  let response = await fetch(url);
  console.log(response.status);
  let data = await response.json();
  factpara.innerText = data.fact;
};

btn.addEventListener("click", gf);
