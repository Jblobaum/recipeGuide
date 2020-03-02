const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10 
let users = []
// let hash = bcrypt.hashSync(req.body.password, saltRounds)


router.get('/:userId', (req, res, next)=>{
    let id = parseInt(req.params.userId)
    let y = posts.filter(x => x.userId === id)
    
    res.send({data: y, success: true})
    
});


module.exports = router