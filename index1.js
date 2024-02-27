// const arr = [2, 23, 3, 2, 32];
// var res = arr.filter((item) => {
//   // console.log(item);
//   return item > 2;

// })
//  console.log(res);
const http = require('http'); // createserver is also used as taking function  as parameter 
http.createServer((req, resp) => {
 resp.write("<h1> hello this  node js web page </h1>");
 resp.end();
}).listen(4500);