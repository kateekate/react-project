const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({message:'Hello'})
})


app.listen(3333, () => {
  console.log('Application is listening on port 3333')
})
