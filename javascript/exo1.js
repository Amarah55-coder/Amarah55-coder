const prompt = require('prompt-sync')();
let question = prompt("Est-ce que vous avez un compte?");
const answer= question;
if (answer === "oui"){
    console.log("Connectez-vous");
}else if (answer === "non"){
    console.log("Veuillez créer un compte");
}else{
    console.log("Votre réponse n'est pas valide");
}
