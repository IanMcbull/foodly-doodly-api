const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
const morgan = require('morgan');
const colors = require('colors');
const recipes = require('./routes/recipes');
const food = require('./routes/food');
const products = require('./routes/products');
const cors = require('cors')
app.use(cors())
require('dotenv').config();
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Route Handlers
app.use(recipes)
app.use('/food', food)
app.use('/products', products)

app.listen(port,()=>{
    console.log(`listening on port: ${colors.yellow(port)}`);
})