//Criar um programa com uma condicional composta para verificar a temperatura entre "frio", "agradavel", ou "quente" 
let temperatura = 25; 

if (temperatura < 18) {
    console.log("Frio");
} else if (temperatura >= 18 && temperatura <= 28) {
    console.log("Agradável");
} else {
    console.log("Quente");
}