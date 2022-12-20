const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('/views', path.join(__dirname, "view"));

const date = new Date();
const hour = date.getHours();

app.use('/css', express.static(path.join(__dirname, 'css'))); // CSS Path
let cssFile = (hour >= 6 && hour <= 18) ? "day.css" : "night.css"; 

app.get('/', (req, res) => {
        res.render("index", {
        time: date.toTimeString(),
        cssFile: cssFile
    });
});
app.listen(3000, ()=>{
    console.log("Server is running...");
});