const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
app.use(bodyparser.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(session({ secret : "This is my secret"}));
app.set('view engine', 'ejs');
app.set('/views', path.join(__dirname, "views"));

app.use('/css', express.static(path.join(__dirname, 'css'))); // CSS Path
app.use("/js", express.static(path.join(__dirname, "views", "js")));

const products = [
    { name: "Apple", price: 20, desc: "Fresh appples", id: 1 },
    { name: "Orange", price: 15, desc: "Fresh oranges", id: 2 },
    { name: "Banana", price: 40, desc: "Raw bananas", id: 3 },
    { name: "Pear", price: 50, desc: "Just Pears", id: 4 },
  ];

app.get('/', (req, res) => {
    let cart = (req.session.cart) ? req.session.cart : [];
    res.render("index", {
        products : products,
        cartCount : cart.length,
        cart : cart
    })
});

app.post('/addToCart', (req, res) => {
  let id = req.body.id;
  let cart = (req.session.cart) ? req.session.cart : [];
  req.session.cart = addToCart(cart, id);
  res.redirect('/');
});

const addToCart = function(cart, id) {
  let product = products.filter(p => p.id == id)[0];
  if(product){
    let cartProduct = null;
    if(cart.length > 0){
      cartProduct = cart.filter(p => p.id == id)[0];
    }
    if(cartProduct){
      cart = cart.map(p => {
        if(p.id == id){
          p.quantity++;
          p.price = p.price + product.price;
        }
        return p;
      });
    }else{
      let newProduct = {
        name : product.name,
        id : product.id,
        desc : product.desc,
        quantity : 1,
        price : product.price
      };
      cart.push(newProduct);
    }
  }
  console.log(cart);
  return cart;
}

app.listen(3000, ()=>{
    console.log("Server is running...");
});