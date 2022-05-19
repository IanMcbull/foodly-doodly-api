const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
const morgan = require('morgan');
const colors = require('colors');
const router = require('./routes/recipes')
require('dotenv').config();
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Testing the get request
app.use(router)


app.listen(port,()=>{
    console.log(`listening on port: ${colors.yellow(port)}`);
})