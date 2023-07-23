function numAverage(nomTableau) {

let moyenneAge = 0;
let sommeAge = 0;

for (let index = 0; index < nomTableau.length; index++){
    sommeAge = sommeAge + nomTableau[index]
}
moyenneAge = sommeAge / nomTableau.length
return moyenneAge
}

const notes = [12,59,78]
const moyenneAgehorsfonction = numAverage(notes)
console.log(Math.floor(moyenneAgehorsfonction));