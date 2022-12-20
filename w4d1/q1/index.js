const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

//middleware setup
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  const key = req.body.key;
  const val = req.body.val;
  if (key && val) {
    res.cookie(key, val);
    console.log("Cookie added, key: " + key + ", value: " + val);
  }
  res.redirect("back");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(3000, () => {
  console.log("Server started in port 3000.");
});
