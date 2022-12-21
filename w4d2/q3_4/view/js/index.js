$(eventHandler);

function eventHandler() {
  $("#btnAdd").click(addToCart);
  $("#btnRemove").click(removeFromCart);
}

function addToCart() {
  $.post("/addtocart", {
    id: $("#id").val(),
  }).done((data) => {
    $("#total").text(data.itemCount);
  });
}

function removeFromCart() {
  $.post("/removefromcart", {
    id: $("#id").val(),
  }).done((data) => {
    $("#total").text(data.itemCount);
  });
}
