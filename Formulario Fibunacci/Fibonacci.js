
var getData= function()
{
 var cantidad=document.getElementById("cantidad").Value;  
 var  
}  
 function fibonacci(numero)
{
    let numeros=[0,1];
    for (let i = cantidad; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
}
document.write(fibonacci(10));
console.log(numeros);