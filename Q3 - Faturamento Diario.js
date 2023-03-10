/*
1- Menor valor de faturamento;
2- Maior valor de faturamento;
3- Numero de dias em que o faturamento diario foi maior que a media mensal;
    3.1 - Para obter fazer ->  somaTotal/(totalDiaMes - diaSemFaturamento);
*/

var jsonFile = require('./dados.json');



var maiorFaturamento = jsonFile[0].valor; //posso utilizar a primeira posição do array, qual é mais eficiente? 
var menorFaturamento = jsonFile[0].valor;
var totalFaturamento = 0;
var contadorDiasSemFaturamento = 0;


for ( let i = 0 ; i < jsonFile.length ; i++){
    
    totalFaturamento += jsonFile[i].valor;
    
    if(jsonFile[i].valor > maiorFaturamento){
        maiorFaturamento = jsonFile[i].valor;
    }
    
    if(jsonFile[i].valor < menorFaturamento && jsonFile[i].valor != 0){
        menorFaturamento = jsonFile[i].valor;
    }
    
    if (jsonFile[i].valor != 0){
        contadorDiasSemFaturamento++;
    }
}

var numeroDiasFaturaMaiorMedia = 0;
var mediaMensalFaturamento = totalFaturamento / contadorDiasSemFaturamento;

for (let i = 0 ; i < jsonFile.length ; i++){
    if(jsonFile[i].valor > mediaMensalFaturamento){
        numeroDiasFaturaMaiorMedia++;
    }
}

console.log("\nMaior Faturamento: " + maiorFaturamento.toFixed(2));
console.log("Menor Faturamento: " + menorFaturamento.toFixed(2));
console.log("Total de Faturamento: " + mediaMensalFaturamento.toFixed(2));
console.log("Dias Faturamento maior que a media mensal: " + numeroDiasFaturaMaiorMedia.toFixed(2) + "\n");


