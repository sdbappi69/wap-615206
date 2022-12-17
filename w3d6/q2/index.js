const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
app.use(bodyparser.json());       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post('/result', (req, res)=>{
    console.log(req.body);
    let name = (req.body.name) ? req.body.name : "person";
    let age = (req.body.age) ? req.body.age : "not defined";
    res.send(`Welcome ${name}. Your age is ${age}.`);
});

app.listen(3000, ()=>{
    console.log("Server is running...");
});