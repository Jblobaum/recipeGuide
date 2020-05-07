const express = require('express');
const router = express.Router();
const mealModel = require('../models/mealModel')


router.post('/addFavMeal', (req, res, next)=>{
    // console.log(req.body);
    
    mealModel.addFavMeal(res, req.body)
})


module.exports = router