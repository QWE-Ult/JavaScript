// setTimeout(() => {
//   console.log("Hello");
// }, 4000);

// function getdata(dataid, getnextdata) {
//   setTimeout(() => {
//     console.log("data", dataid);
//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 2000);
// }

// getdata(1, () => {
//   getdata(2, () => {
//     getdata(3);
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("promise");
//   // resolve("success");
//   reject("error");
// });

// function getdata(dataid, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//       if (getnextdata) {
//         getnextdata();
//       }
//     }, 2000);
//   });
// }

// const getpromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("promise");
//     //   // resolve("success");
//     reject("error");
//   });
// };

// let promise = getpromise();
// promise.then(() => {
//   console.log("pro done");
// });

function getdata(dataid, getnextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataid);
      resolve("success");
      if (getnextdata) {
        getnextdata();
      }
    }, 2000);
  });
}

// let p1 = getdata(1);
// p1.then((res) => {
//   console.log(res);
// });

async function getalldata() {
  console.log("data 1");
  await getdata(1);
  console.log("data 2");
  await getdata(2);
  console.log("data 3");
  await getdata(3);
  console.log("data 4");
  await getdata(4);
  console.log("data 5");
  await getdata(5);
}
