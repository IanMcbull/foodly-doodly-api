const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get('/',async(req,res)=>{
if(!req.query.query){
  res.status(400).json({statuscode: 404, message:'The query parameter is required. Please add it to your query'});
}    
 else{
    try {
        const response = await axios(`https://api.spoonacular.com/food/products/search/?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${req.query.query}&number=${req.query.number||5}`);
        res.json(response.data);
     } catch (error) {
         res.send(JSON.stringify(error));
     }
 }
})



module.exports = router