const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    if (!name) {
        name = "person";
    }
    let age = (req.query.age) ? req.query.age : "not defined";
    res.send(`Welcome ${name}. Your age is ${age}.`);
});
app.listen(3000, ()=>{
    console.log("Server is running...");
});