const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async(req, res)=>{
    try{
    const response = await axios(`https://api.spoonacular.com/recipes/search?apiKey=d0f806c10dd2498c95203818f61e1e07&number=${req.query.number||5}`)
    res.send(response.data);
 }catch(err){
   res.send(JSON.stringify(err));
 }
})

module.exports = router