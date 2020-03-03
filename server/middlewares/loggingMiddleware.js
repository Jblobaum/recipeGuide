function ipLogger(req, res, next){
    console.log(req.path);
    console.log(req.body);
    
    next()
}

module.exports = ipLogger