var minhaVar = 'Minha Variavel';

var outraVAr = 'Outra variavel';

function minhaFunc(x, y){
    return x + y;
}
// ES6 ou ES 2015

let num = 2;
const PI = 3.14;

var numeros = [1,2,3];
numeros.map(function(valor){
    return valor * 2;
});

numeros.map(valor => valor * 2);

class Matematica {
    soma(x, y){
        return x + y;
    }
}

var n1: any = 'string qualquer coisa';
n1 = 4;