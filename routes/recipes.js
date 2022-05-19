const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async(req, res)=>{
    try{
    const response = await axios(`https://api.spoonacular.com/recipes/search?apiKey=${process.env.SPOONACULAR_API_KEY}&number=${req.query.number||5}`)
    res.send(response.data);
 }catch(err){
   res.send(JSON.stringify(err));
 }
})

module.exports = router