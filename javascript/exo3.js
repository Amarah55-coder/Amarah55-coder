const prompt= require('prompt-sync')();
let nombre_1= Number(prompt("Saisir la première nombre: "));
let nombre_2= Number(prompt("Saisir la seconde nombre: "));
if (nombre_1<0 && nombre_1<0){
    console.log("Le produit des deux nombres est positifs.")
}else if (nombre_1==0 || nombre_2==0){
    console.log("Le produit est nul");
}else if(nombre_1<0 || nombre_2<0){
    console.log("Le produit est negatif");
}else{
    console.log("Le produit est positif");
}