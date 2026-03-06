let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

//question 1
let sousTotal=prix*quantite; console.log(`le sous total est : ${sousTotal}`)

//question 2

let redution = 0
if(codePromo != null && estMembre == true){
    redution = sousTotal *(10/100); 
    console.log(`montant de la réduction est ${redution} `)
}
else{
     redution = 0
    console.log(`montant de la réduction est ${redution} `)
}

//question 3

let totalFinal = sousTotal - redution ;

//question 4
let paiementStaus = true;
if(soldeCompte < totalFinal ){ 
    console.log("Solde insuffisant")
    paiementStaus = false ;
}
else{
    console.log("Paiement accepté")
}

//question 5
if(paiementStaus){
    soldeCompte-=totalFinal;
    console.log(`le solde du compte après paiement ${soldeCompte} `)
}

//question 6

console.log("===== RÉCAPITULATIF =====")
console.log(`produit : ${nomProduit}`)
console.log(`prix : ${sousTotal}`)
console.log(`quantite : ${quantite}`)
console.log(`Prix unit.: ${prix}`)
console.log(`Réduction : ${redution}`)
console.log(`Total : ${totalFinal}`)
console.log(`Statut :${ paiementStaus  ?  "Paiement accepté" : "paiement refus"  } `)
console.log(`Solde : ${soldeCompte} `)
