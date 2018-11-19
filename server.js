const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const index = require('./routes/api/index');
const sign_up = require('./routes/api/sign-up');
const profile = require('./routes/api/profile');
const db = require('./db/db');
const createProfile = require('./queries/createProfile');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//settings
app.set('views', './views');
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8989);
//routing 
app.use('/', index);
app.use('/profile', profile);
app.use('/sign-up',sign_up);

const port = app.get('port');
app.listen(port, () => console.log(`Server running on port:${port}`));
// look and give feed back