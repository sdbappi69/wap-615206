const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const productRouter = require("./route/product");

const products = [
  { name: "Apple", price: 20, desc: "Fresh appples", id: 1 },
  { name: "Orange", price: 15, desc: "Fresh oranges", id: 2 },
  { name: "Banana", price: 40, desc: "Raw bananas", id: 3 },
  { name: "Pear", price: 50, desc: "Just Pears", id: 4 },
];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: "this is a scret key" }));
app.use("/style", express.static(path.join(__dirname, "style")));
app.use("/js", express.static(path.join(__dirname, "view", "js")));

app.use("/product", productRouter);

app.get("/", (req, res) => {
  let cart = req.session.cart ? req.session.cart : [];
  res.render(path.join(__dirname, "view", "main.ejs"), { products, cart });
});

app.post("/addtocart", (req, res) => {
  let id = parseInt(req.body.id);
  let cart = req.session.cart ? req.session.cart : [];
  req.session.cart = addToCart(cart, id);
  const itemCount = req.session.cart.reduce(
    (sum, item) => (sum += item.quantity),
    0
  );
  res.send({ itemCount: itemCount });
});

app.post("/removefromcart", (req, res) => {
  let id = parseInt(req.body.id);
  req.session.cart = removeFromCart(req.session.cart, id);
  const itemCount = req.session.cart.reduce(
    (sum, item) => (sum += item.quantity),
    0
  );
  res.send({ itemCount: itemCount });
});

app.listen(3000, () => {
  console.log("Running at port 3000...");
});

const addToCart = function (cart, id) {
  let product = products.filter((p) => p.id == id);
  if (product.length > 0) {
    let productInCart = cart.filter((p) => p.id == id)[0];
    if (productInCart) {
      cart = cart.map((x) => {
        if (x.id == id) {
          x.quantity++;
        }
        return x;
      });
      return cart;
    }
    product[0].quantity = 1;
    cart.push(product[0]);
    return cart;
  }
};

const removeFromCart = function (cart, id) {
  console.log(id);
  let productInCart = cart.filter((p) => p.id == id)[0];
  console.log(productInCart);
  if (productInCart) {
    if (productInCart.quantity == 1) {
      return cart.filter((x) => x.id != id);
    }
    console.log("here");
    cart = cart.map((x) => {
      if (x.id == id) {
        x.quantity--;
      }
      return x;
    });
    console.log(cart);
  }
  return cart;
};
