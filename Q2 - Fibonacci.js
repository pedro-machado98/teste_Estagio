/*
Nesta solução estou considerando que o 0 faz parte da sequencia de fibonacci.
*/

var verificarPertencimento = 3;

var primeiro = 0; 
var segundo = 1; 
var soma = 0;     

while( soma < verificarPertencimento){ 
    soma = primeiro + segundo;
    primeiro = segundo;
    segundo = soma;
}

if( soma == verificarPertencimento){
    console.log(`O numero ${verificarPertencimento} pertence a sequencia de fibonacci.`); // poderia utilizar "O numero " + verificarPertencimento + " pertence... ")
} else{
    console.log(`O numero ${verificarPertencimento} não pertence a sequencia de fibonacci.`);
}
