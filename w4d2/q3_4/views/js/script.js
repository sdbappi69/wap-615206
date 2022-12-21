$(eventHandler);

function eventHandler(){
    $("#hideCart").hide();
    $("#cart").hide();
    $("#showCart").click(showCart);
    $("#hideCart").click(hideCart);
    $("#addToCart").click(addToCart);
}

function showCart(){
    $("#cart").show();
    $("#hideCart").show();
    $("#showCart").hide();
}

function hideCart(){
    $("#cart").hide();
    $("#hideCart").hide();
    $("#showCart").show();
}