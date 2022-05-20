const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async(req, res)=>{
    try{
    const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&number=${req.query.number||5}&cuisine=${req.query.cuisine||''}&diet=${req.query.diet||''}&author=${req.query.author||''}&query=${req.query.query||''}`)
    res.json(response.data);
 }catch(err){
   res.send(JSON.stringify(err));
 }
})

router.get('/ingredients',async(req,res)=>{
    if(!req.query.ingredients){
        res.status(400).json({
            statuscode: 400,           
            msg:'The ingredients parameter is required. Please add it to your query'})
    }
    else{
        try{
            const response = await axios(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_API_KEY}&ingredients=${req.query.ingredients||''}&number=${req.query.number||5}`)
            res.json(response.data);
         }catch(err){
           res.send(JSON.stringify(err));
         }
    }
})

module.exports = router