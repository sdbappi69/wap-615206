const express = require('express');
const path = require('path');
const app = express();
const _8ballRouter = require("./router/8ball");

app.set("view engine", "ejs");
app.set("/views", path.join(__dirname, "views"));

app.use(express.json());
app.use("/js", express.static(path.join(__dirname, "views", "js")));
app.use("/8ball", _8ballRouter);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, (() => {
    console.log("Server is running...");
}))