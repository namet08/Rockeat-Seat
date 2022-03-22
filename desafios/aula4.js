let array = [1, 2, 3];

let multiplcation = array.map(function(parametro) {
    return parametro * 2;
});

console.log(array);
console.log(multiplcation);


///////////////////////////////////////////

let insert = {};

let linguagem = prompt("Qual estado?")
let region = prompt("Qual cidade?")

insert[`${region}`] = `${linguagem}`;

console.log(insert);