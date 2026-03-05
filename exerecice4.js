const p1 =[0,0,0,"",null,null,NaN ,1," \t\n "];
const p2 =["","0",false,false,undefined,false,NaN,"1",0];

for(let i=0; i<p1.length ; ++i){
    console.log(`${p1[i]} == ${p2[i]} -> ${p1[i] == p2[2]}  |  ${p1[i]} === ${p2[i]} -> ${p1[i] === p2[2]} `);
}
console.log("----------------------------------------------------");
for(let i=0; i<p1.length ; ++i){
    let compteur=0;
    let comparaison1= p1[i] == p2[i];
    let comparaison2= p1[i] === p2[i];
    if(comparaison1 == false && comparaison2 == true ){
        ++compteur;
    }
}
console.log(`${compteur} paire où == et === donnent des résultats différents`);