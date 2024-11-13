const prompt = require('prompt-sync')();
let question_mot_de_passe = prompt("Saisir votre mot de passe: ");
let question_de_confirmation_mot_de_passe = prompt ("Réentrée votre mot de passe: ");
const mot_de_passe = question_mot_de_passe;
if (mot_de_passe.length<8){
    console.log("mot de passe très faible");
}else if(mot_de_passe.length>=8 && question_mot_de_passe === question_de_confirmation_mot_de_passe){
    console.log("Vous êtes authentifié, bienvenue");
}else{
    console.log("Mauvais mot de passe");
}
