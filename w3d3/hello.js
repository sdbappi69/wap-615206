const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    
    readline.question('What is your age? ', age => {
        console.log((age <16) ? "You’re not allowed to drive in Iowa" : "You’re allowed to get a drivers license in Iowa");
        readline.close();
    });
});