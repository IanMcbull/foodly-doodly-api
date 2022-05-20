const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/', async(req, res)=>{
 try {
     const response = await axios(`https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${req.query.query}`)
     res.json(response.data);
 } catch (error) {
     res.send(JSON.stringify(error));
 }
})

module.exports = router