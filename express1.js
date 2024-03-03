const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const public_path = path.join(__dirname, 'public');
//  __ dirname  is used for  global  variable
app.set('view engine', 'ejs'); // setting template engine 
app.use(express.static(public_path));

app.get('/profile', (__, resp) => {
  //  resp.sendFile(`${public_path}/about.html`)

  const user = {
    name: 'chandan  koranag',
    email: 'chandankoranga728@gmail.com'
 // skills:['c++', 'disable','cp' , 'html' ,' css' , 'javascript','node js']
 // skills:['skill', 'javascript']
  }
  resp.render('profile', { user });
})

app.listen(5000);