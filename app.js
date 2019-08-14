const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 8080

app.listen(port, () => {
  console.log('Server start on port ' + port)
})