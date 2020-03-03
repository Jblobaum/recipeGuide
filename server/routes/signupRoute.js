const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel')



router.post('/signup', (req, res, next) => {
    if (req.body.username === undefined || req.body.password === undefined) {
        return res.send({ success: false, msg: "Incorrect data provided." })
    }
    userModel.addNewUser(res, req.body)

})

router.post("/login", (req, res) => {
    if (req.body.username === undefined || req.body.password === undefined) {
        return res.send({ success: false, msg: "Incorrect data provided." })
    }
    userModel.login(res, req.body)
})

module.exports = router