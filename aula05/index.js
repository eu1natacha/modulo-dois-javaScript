const readline = require("readline");
 
const senha = "123456"
const senhaCerta = false

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite a senha ", function (info) {
    console.log(`Senha digitada foi ${info}`);
});