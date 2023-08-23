//ceci est le premier exo
let message = "There is no war in Ba Sing Se";
let nombre = 0;

for (let i = 0; i < message.length; i++) {
    if (message[i] !== " ") {
        nombre++;
    }else{
    nombre=nombre+0
    }
}

//ceci est le deuxiemme exo
console.log(`Le nombre de lettres dans la phrase est :` + nombre);

let pays = ['Chine', 'Japon', 'Corée du Sud', 'Vietnam', 'Malaisie'];
let capital = ['Beijing', 'Tokyo', 'Seoul', 'Hanoï', 'Kuala Lumpur'];

for (let i = 0; i < pays.length; i++) {
    console.log(`Votre pays : ${pays[i]}  a une capitale nommée : ${capital[i]}.`);
}

//ceci est mon troisiemme exo 
let randomizer = Math.floor(Math.random() * 4);

let commentaire;

if (randomizer === 0) {
    commentaire = "A certain victory";
} else if (randomizer === 1) {
    commentaire = "not so certain victory";
} else if (randomizer === 2) {
    commentaire = "an uneasy victory";
} else {
    commentaire = "Your fate is unclear, ô chosen undead";
}
console.log('le nombre aleatoir est : ' + randomizer + ' alors Your fate is ' + commentaire);

//ceci est le quatriemme exo 
let Month = Math.floor(Math.random() * 12) + 1;
let Season;

if (Month >= 3 && Month <= 5) {
    Season = "Spring";
} else if (Month >= 6 && Month <= 8) {
    Season = "Summer";
} else if (Month >= 9 && Month <= 11) {
    Season = "Autumn";
} else {
    Season = "Winter";
}

console.log(`The current season is: ` + Season);