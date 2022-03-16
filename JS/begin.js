var prompt = require('prompt');

prompt.start();

var pergunta =  "Olá, me informe seu nome"

prompt.get([pergunta], function (err, result) {


    console.log('Command-line input received:');
    
    console.log("Ola" + result.pergunta)
});