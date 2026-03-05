let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false
const variables= [nom,age ,ville ,score ,actif]
console.log("Partie A:")
for(let i=0 ; i<variables.length;++i) console.log(variables[i] ?? "valeur par défaut")

console.log("Partie B:")
for(let i=0 ; i<variables.length;++i) console.log(variables[i] || "valeur par défaut")

console.log("Partie C:")
for(let i=0 ; i<variables.length;++i){ 
    if( (variables[i] ?? "valeur par défaut") == (variables[i] || "valeur par défaut") ){
        console.log(`${variables[i]} : ?? et || -> même résultat`);
    }
    else console.log(`${variables[i]} : ?? et || -> résultat différent`)
}
