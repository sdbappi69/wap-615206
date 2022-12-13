function shortest(str1, str2, str3){
    let min = str1.length > str2.length ? str2 : str1;
    return min.length > str3.length ? str3 : min;
}
console.log(shortest("hello", "z", "bye"));

setInterval(alertUser, 10 * 60 * 1000, 10);
function alertUser(time){
    alert(time + " minutes have passed");
}