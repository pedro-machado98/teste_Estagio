var estados = [
    {
        nome : 'sp',
        faturamento: 67836.43,
    },
    {
        nome : 'rj',
        faturamento: 36678.66,    
    },
    {
        nome : 'mg',
        faturamento: 29229.88,    
    },
    {
        nome : 'es',
        faturamento: 27165.48,    
    },
    {
        nome : 'outros',
        faturamento: 19849.53,    
    },
];

var total = 0;

for (let i = 0 ; i < estados.length ; i++){
    total += estados[i].faturamento;

}

for (let i = 0 ; i < estados.length ; i++){
    estados[i].porcentagem = (estados[i].faturamento*100/total).toFixed(); //colocar sem decimal mas como number, esta como string
}

console.log(estados); 