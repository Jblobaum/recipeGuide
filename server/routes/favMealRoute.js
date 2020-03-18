const express = require('express');
const router = express.Router();
const mealModel = require('../models/mealModel')


router.post('/addFavMeal', (req, res, next)=>{
    mealModel.addFavMeal(res, req.body)
})


module.exports = router