const express = require("express");
const path = require("path");
const app = express();
const _8ballRouter = require("./router/8ball");

app.set("view-engine", "ejs");

app.use("/js", express.static(path.join(__dirname, "view", "js")));
app.use("/8ball", _8ballRouter);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "view", "index.ejs"));
});

app.listen(3000, () => {
  console.log("Started in port 3000");
});
