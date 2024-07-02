// // const a= 7;
// // const  b = 8;
// // const result = `${a+b}`;
// // console.log(result);
// const user = {
//   username: "chandan",
//   count: 533,
//   age: 20,
//   getdetail: function () {
//     // this is used for  : The value of this depends on the context in which it is used.
//     // In the global context (outside of any function or object), 
//     //this refers to the global object, which is window in browsers.
//     console.log(this.username);
//     console.log(this);
//   }
// }
// console.log(user.getdetail());


// constructor function()  :
function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);

  }
  return this
}
// const date = new date;
// this new keyword  is constructor funtion 
const userone = user("chandan", 20, true);
// const usertwo = user("A", 20, true); // in this case values will be overwritten 
const usertwo = new user("A", 20, true);
console.log(usertwo);