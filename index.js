require('dotenv').config();

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const router = require('./src/router');
const path = require('path');


const PORT = process.env.PORT || 3010;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: true}))

app.use(router);



app.listen(PORT, ()=> {
    console.log('Listening on port: ' + PORT)
})
