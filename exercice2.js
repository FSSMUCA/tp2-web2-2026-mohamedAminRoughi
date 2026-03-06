const valeur =[0,1,"",null,undefined,NaN,false,[]];

for (let i = 0; i < valeur.length; i++) {
    if(valeur[i] === "") console.log( ` (chaine vide)  -> ${Boolean(valeur[i])} ` );
    console.log( `${  String(valeur[i])} ->  ${ Boolean(valeur[i]) ? "trultly": "falsy"} ` );
}
