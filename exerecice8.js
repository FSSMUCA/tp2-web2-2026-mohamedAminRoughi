let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

nom = nom.trim();

age = Number(age)

let aroIndex = email.indexOf("@");
let pointIndex = email.indexOf(".",aroIndex);
let result = (email.indexOf("@") != -1) && (email.indexOf(".",aroIndex)!= -1) ;

scoreJeu= parseInt(scoreJeu);
if(scoreJeu == NaN) scoreJeu = 0 ;

if(estAdmin == "false"){
    estAdmin= false;
}
else{
    estAdmin = true ;
}

console.log("===== RAPPORT UTILISATEUR =====")
console.log(`nom              :${nom} `)
console.log(`age              :${age} `);
console.log(`scoreJeu         :${scoreJeu}  `);
console.log(`estAdmin         :${scoreJeu}  `);
console.log(`derniereConnexion: ${derniereConnexion ?? "jamais"} `)
console.log(`nombreConnexions : ${parseInt(nombreConnexions)== 0 ? "Aucune connexion" : parseInt(nombreConnexions) }` )

