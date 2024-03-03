const express = require('express');
const app = express();

app.get("", (req, resp) => {
  resp.send(`
    <h1>Welcome to Home page</h1>
    `);
});
app.get("/about", (req, resp) => {
  resp.send(`< input type ="text" placeholder name = "user name"/>
<button> click me </button>
<a href = "/">  go to home page </a>
`);
})
app.listen(5000);