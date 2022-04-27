//recuperer les elements//
let griditem = [...document.getElementsByClassName("grid-item")];

let tour = 'x'
// transformer le id en un tableau en javascript//
let tab = Array.from(griditem)
// les conditions pour gagner le jeu//
let victoire = [
    //conditions 1//
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //conditions 2//
    [0,3,6],
    [1,4,7],
    [2,5,8], 
    //conditions 3//
    [0,4,8],
    [2,4,6]
]
// on va determiner qui sont  les joueurs//
function joueurs() {
    if (this.textContent !== "") {
        return
    }
   if (gagner()) {
       if (tour === "o") {
           alert("x a gagner")
       } else {
           alert("o a gagner")
       }
       return;
   }
   this.textContent = tour

   if (tour==="x") {
    Changetour(tour)
    griditem[choix()].click();
   Changetour(tour)
   }; 
}
// on va organiser pour savoir le tour des joueurs//
function Changetour(letour) {
    if (letour==='x') tour = 'o'
    else tour = 'x'
}
function choix() {
    let choix = 0;

    do {
        choix = Math.floor(Math.random() * griditem.length);
    } while(griditem[choix].textContent !== "" && griditem.some(el => el.textContent == ""));

    return choix;
}

griditem.forEach((boutton) => {
    boutton.addEventListener("click", joueurs)
})
function gagner(){
    let victorieux = false;
    for (let i = 0; i < victoire.length; i++) {
        const element = victoire[i];
        const a = griditem[element[0]].textContent;
        const b = griditem[element[1]].textContent;
        const c = griditem[element[2]].textContent;
        if (a === "" || b === "" || c === "") {
            continue;
        }

        if (a === b && b === c) {
            victorieux = true;
        }
    }

    return victorieux;
}

