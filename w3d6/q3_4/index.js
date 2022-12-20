const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
app.use(bodyparser.json());       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.set('view engine', 'ejs');
app.set('/views', path.join(__dirname, "view"));

app.use('/css', express.static(path.join(__dirname, 'css'))); // CSS Path

const products = [
    { name: "Apple", price: 20, desc: "Fresh appples", id: 1 },
    { name: "Orange", price: 15, desc: "Fresh oranges", id: 2 },
    { name: "Banana", price: 40, desc: "Raw bananas", id: 3 },
    { name: "Pear", price: 50, desc: "Just Pears", id: 4 },
  ];

  let cart = [
    {
      cartId: 1,
      name: "Apple",
      price: 20,
      desc: "Fresh appples",
      id: 1,
      quantity: 1,
    },
    {
      cartId: 2,
      name: "Orange",
      price: 15,
      desc: "Fresh oranges",
      id: 2,
      quantity: 1,
    }
  ];

app.get('/products', (req, res) => {
    res.render("index", {
        products: products,
        cart : cart
    })
});

app.listen(3000, ()=>{
    console.log("Server is running...");
});