/* 
    1 - declare uma variavel com o nome weigth
*/

var weigth;

/* 
    2 - que tipo de dado é a varaivel a cima 
*/

console.log(typeof weigth);

/*
    3 - declare uma variável e atribua valores para cada um dos dados:
    * name: String 
    * age: Number (integer)
    * stars: Number (flot)
    * isSubxcribed: Boolean
*/

let name = "João";
let age = 2;
let stars = 6.7;
let isSubxcribed = false;

/*
    4 - a variavel student abaixo é de que tipo de dado ?
    4.1 Atribua a ela as mesmas propriedades e valores do exercicios 3
    4.2 Mostre a ela as mesmas propriedades e valores do exercicio 3
    4.3 Mostre no console a seguinte mensagem:
    
    <name> de idade <age> pesa <weight> kg.

    Atenção, subistitua <name> <age> e <weight> pelos valores de cada propriedade do projeto.
*/

let student = {
    name: "João",
    age: 25,
    weight: 81.95,
    isSubxcribed: false,
};

let qualquer = {
    name: "Doidin",
    age: 34,
    weight: 75.95,
    isSubxcribed: false,
};


// console.log(student)
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

// console.log(typeof student)

/*
    5. Declare uma variavel do tipo array, de nome student e atribua a ele 
    nenhum valor, ou seja somente o array vazio. 
*/

// var students = []

/*
    6. Reatribua valor para a variavel a cima, colocando 
    dentro dela o objeto student da questão 4. (Não copiar 
    e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/

var students = [
    student,
    
]

console.log(students)


/*
    7. Coloque no console o valor da posição zero do array acima
*/

students[1] = qualquer
console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/



/*
    9. Sem rodar o código responda qual é a resposta do 
    codigo abaixo e por que? Após sua resposta, rode o 
    código e veja se você acertou,

    console.log(a)
    var a = 1
*/
