
// console.warn("CURD operations with FS")
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;
fs.writeFileSync(filePath, 'this is a simple file');
fs.readFile(filePath, 'utf8', (err, item) => {
// fs.readFile(filePath, (err, item) => {  // what happen without utf8
  console.log(item);
})
fs.appendFile(filePath, 'and the file name is check.txt', (err) => {
  if (!err) {
    console.log("file is  updated");
  }
})

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })

