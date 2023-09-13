// let result = "";

// function waitResolve(message) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(message);
//     }, 2000);
//   });
// }
// result = waitResolve("Holis crayolis").then((message) => {
// //   console.log(message);
// });

// function sumarLento(num1, num2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>resolve(num1 + num2), 2000);
//   });
// }

// function sumarRapido(num1, num2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>resolve(num1 + num2), 1000);
//   });
// }

// const promises = Promise.all([
//   sumarLento(1, 1),
//   sumarRapido(1, 2),
//   "Puras promesas",
//   4,
//   true,
// ]);
// // console.log(promises);

// //
// const race = Promise.race([sumarLento(2,3), sumarRapido(2,2)]);
// race.then(console.log)
// .catch(console.log);

