const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;

const getNumber = ()=>{
    readline.question('Write a number: ', num => {
        if(num.toLowerCase() == 'stop'){
            console.log(sum);
            readline.close();
        }else{
            sum += parseInt(num);
            getNumber();
        }
    });
}

getNumber();