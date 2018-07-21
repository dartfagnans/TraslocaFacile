const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TraslocaFacile');

const app = express();

app.use(bodyParser.json());

const User = require('./models/user');

app.set('views', 'client/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('signup');
});

app.post('/signup/local', function(req, res) {
    console.log('Sono entrato qui');
    User.name = req.body.name;
    User.surname = req.body.surname;
    User.birthday = req.body.birthday;
    User.email = req.body.email;
    User.password = req.body.password;
    User.address1 = req.body.address1;
    User.address2 = req.body.address2;
    User.city = req.body.city;
    User.state = req.body.state;
    User.zip = req.body.zip;
    res.render('signup');
    console.log(User);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
})

module.exports = app;