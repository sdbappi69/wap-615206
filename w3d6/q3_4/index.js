const express = require("express");
const path = require("path");
const app = express();
const productRouter = require("./route/product");

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
  },
];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/style", express.static(path.join(__dirname, "style")));
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "view", "main.ejs"), { products, cart });
});

app.get("/addcart", (req, res) => {
  let id = parseInt(req.query.id);
  let product = products.filter((p) => p.id == id);
  if (product) {
    let cartId = cart.length > 0 ? cart[cart.length - 1].cartId + 1 : 1;
    cart.push({ cartId, ...product[0] });
  }
  res.redirect("/");
});

app.get("/removecart", (req, res) => {
  let cartId = parseInt(req.query.cartId);
  cart = cart.filter((c) => c.cartId != cartId);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Running at port 3000...");
});
