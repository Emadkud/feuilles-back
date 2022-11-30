const express = require('express');
const app = express();
var cors = require ('cors')
const port = 5000;

app.use(cors())

app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
  console.log('salut')
  
})

app.get('/', (req, res) => {
    res.send('Home page')
  })