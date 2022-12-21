const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const bodyparser = require('body-parser');

// Middleware setup
app.use(cookieParser());
app.use(express.urlencoded({ extended : false }));


// View Setup
app.set('view engine', 'ejs');
app.set('/views', path.join(__dirname, 'view'));

app.get('/', (req, res)=>{
    res.render('index', {
        cookies: req.cookies
    });
});

app.post('/add-cookie', (req, res)=>{
    const key = req.body.key;
    const value = req.body.value;
    if(key && value){
        res.cookie(key, value);
    }
    res.redirect('/');
});

app.listen('3000', ()=>{
    console.log("Server is running...");
})