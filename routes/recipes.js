const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async(req, res)=>{
    console.log(req.query)
    try{
    const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&number=${req.query.number||5}&cuisine=${req.query.cuisine||''}&diet=${req.query.diet||''}&author=${req.query.author||''}&query=${req.query.query||''}`)
    res.json(response.data);
 }catch(err){
   res.send(JSON.stringify(err));
 }
})

module.exports = router