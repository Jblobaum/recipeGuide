require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const signupRoute = require('./server/routes/signupRoute');
const bodyParser = require('body-parser')
const logger = require('./server/middlewares/loggingMiddleware')
const pool = require('./server/configs/dbConfig')

pool.query("SELECT * FROM USER", (err, rows)=>{
    console.log(rows);
    
})

app.use(bodyParser.json());
app.use(logger);
app.use(express.static(__dirname + '/dist/recipeGuide'));



app.use('/api/users', signupRoute);



app.get('*', (req, res)=>
    res.sendFile('./dist/recipeGuide/index.html', {root: __dirname + "/"})
);




app.listen(port, () => console.log(`Listening on port ${port}!`))