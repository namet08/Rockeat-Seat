// functions experssion
// functions anonymous

const sam = function (parametro1, prametro2) {
    let result = parametro1 + prametro2
    return result
}

// const thiss = function (number2, bumber3) {
//     console.log(number2 + bumber3);
// }

// console.log(`o value 1 é ${value1}`);    
// console.log(`o value 2 é ${value2}`);

let value1 = 35
let value2 = 25

console.log(`a some é ${sam(value1, value2)}`);

let subject = 'create video'

function createTHink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createTHink(subject))

sayMyName();

function sayMyName() {
    console.log('Julio')
}



const sayMyName = (blablabla) => {
    console.log(blablabla)
}

sayMyName('Julinho')