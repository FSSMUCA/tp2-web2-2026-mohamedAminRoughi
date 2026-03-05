const nombres =[0,NaN ,Infinity ,-Infinity ,42 ,3.14 ,Number.MAX_SAFE_INTEGER+1 ,-0];

for(let i=0 ; i<nombres.length ;++i){
    if(Number.isNaN(nombres[i])){
        console.log(`${nombres[i]} -> invalide`);
    }else if(nombres[i] == Infinity || nombres[i] == -Infinity){
        console.log(`${nombres[i]} -> infini`)
    }
    else if( (1 / nombres[i]) == -Infinity ){
        console.log(`${nombres[i]} -> zero negatif`)
    }
    else if(Number.isSafeInteger(nombres[i])){
        console.log(`${nombres[i]} -> ENTIER SUR`)
    }
    else if(! Number.isSafeInteger(nombres[i])){
        console.log(`${nombres[i]} ->  ENTIER HORS LIMITES`)
    }
    else{
        console.log(`${nombres[i]} ->  dicimal`)
    }
}