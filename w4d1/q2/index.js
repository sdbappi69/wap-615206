const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "this is a secret key" }));

app.use("/css", express.static(path.join(__dirname, "css")));

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = -1;
  }
  req.session.name = name;
  req.session.age = age;
  res.redirect("/output");
});

app.get("/output", (req, res) => {
  let name = req.session.name;
  let age = req.session.age;
  res.send(`Welcome ${name}. You are ${age} years old.`);
});

app.get("/", (req, res) => {
  const hour = new Date().getHours();
  const theme = hour >= 6 && hour < 18 ? "day" : "night";
  res.render(path.join(__dirname, "form.ejs"), { theme: theme });
});

app.listen(3000, () => {
  console.log("Server started in port 3000.");
});
