const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const product = require('./routes/product.router') // Imports routes for the products

app.use('/products', product)

const port = 8080

app.listen(port, () => {
  console.log('Server start on port ' + port)
})