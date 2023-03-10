var palavra = "couve";

function funcaoSepara (palavra){
    let novaPalavra = [];

    palavra.split("").forEach( (letra, indice) => {
        novaPalavra.push(palavra[palavra.length-indice-1]);
    });

    return novaPalavra.join("");
}

console.log(funcaoSepara(palavra));
