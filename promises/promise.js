//  we get directly promise as objects 
//the Promise object represents the eventual completion (or failure) 
// of an asynchronous operation(independent to other processes) and its resulting value.
// * Promises provide a way to handle asynchronous operations in a more manageable 
//and readable way compared to traditional callback-based approaches.
// const promiseone = new Promise(function (resolve, reject) {
//    console.log("async task  is completed");
//    resolve();
// }, 1000)
// promiseone.then(function () {
//    console.log("promise is  conjumed")
// })
// const promisethree = new Promise(function (resolve, reject) {
//    console.log("async task  is completed");
//    resolve({ username: "koranga", email: "Koranga77095@gmail.com" });
// }, 1000)
// promisethree.then(function (user) {
//    console.log(user)
// })

////  .then lagake values and .catch laga ke  values (if error comes )
// const promiseFour = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//       let error = true
//       if (!error) {
//          resolve({ username: "hitesh", password: "123" })
//       } else {
//          reject('ERROR: Something went wrong')
//       }
//    }, 1000)
// })

// promiseFour
//    .then((user) => {
//       console.log(user);
//       return user.username
//    }).then((username) => {
//       console.log(username);
//    }).catch(function (error) {
//       console.log(error);
//    }).finally(() => {
//       console.log("the promise is either resolved and rejected");
//    })

// const promiseFive = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//       let error = false
//       if (!error) {
//          resolve({ username: "javascript", password: "123" })
//       } else {
//          reject('ERROR: JS went wrong')
//       }
//    }, 1000)
// });

// //  async and await wailt  till the task is  completed 
// //  async does not handle error directly
// async function consumePromisefive() {
//    // this is wrong way as promise is object  : const resp = await promiseFive();
//    // try , catch is used to to handle  error
//    try {
//       const resp = await promiseFive;
//       console.log(resp);
//    }
//    catch (error) {
//       console.log(error);
//    }
// }

async function getAllUsers() {
   try {
      //  const response =  fetch('https://jsonplaceholder.typicode.com/users') 
      // fetch also take time 
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data);
   } catch (error) {
      console.log("E: ", error);
   }
}

getAllUsers()
