const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const loginRoute = require('./server/routes/loginRoute');
const signupRoute = require('./server/routes/signupRoute');
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/recipeGuide'));

app.get('/', (req, res)=>{
    res.sendFile('./dist/recipeGuide/index.html')
});

app.use('/login', loginRoute);

app.use('/signup', signupRoute);

app.get('*', (req, res) => res.redirect("back"));




app.listen(port, () => console.log(`Listening on port ${port}!`))