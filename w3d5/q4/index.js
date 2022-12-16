const express = require('express');
const app = express();
const path = require('path'); // To make path
const bodyparser = require('body-parser'); // To handle the post req
app.use(bodyparser.json());       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
// To get date and time
const date_ob = new Date();
const hour = date_ob.getHours();

app.use('/css', express.static(path.join(__dirname, 'css'))); // CSS Path

let cssFile = (hour >= 6 && hour <= 18) ? "day.css" : "night.css"; 

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>W2D5</title>
                <link rel="stylesheet" href="./css/${cssFile}">
            </head>
            <body>
                <form action="/result" method="post">
                    Name <input type="text" name="name">
                    Age <input type="text" name="age">
                    <input type="submit" value="Submit Query">
                </form>
            </body>
        </html>
    `);
});

app.post('/result', (req, res)=>{
    let name = (req.body.name) ? req.body.name : "person";
    let age = (req.body.age) ? req.body.age : "not defined";
    res.redirect(`/output?name=${name}&age=${age}`);
});

app.get('/output', (req, res) => {
    let name = (req.query.name) ? req.query.name : "person";
    let age = (req.query.age) ? req.query.age : "not defined";
    res.send(`Welcome ${name}. Your age is ${age}.`);
});

app.listen(3000, ()=>{
    console.log("Server is running...");
});