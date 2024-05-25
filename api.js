
const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
app.use(express.json())  //  it is used to parse JSON-formatted request bodies

// app.get('/', async (res, resp) => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
//   resp.send(data);

// });


app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body)
  resp.send(result);
  console.log(result);

});


// app.put("/:name", async (req, resp) => {
//   console.log(req.body)
//   const data = await dbConnect();
//   let result = data.updateOne(
//     { name: req.params.name },
//     { $set: req.body }
//   )
//   resp.send({ status: "updated" })
// });
// */
// app.post('/', (req, res) => {
//   res.send({ name: 'koranga brothers' })
//   console.log(req.body);
// });

app.listen(5000);