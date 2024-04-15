import Kosarkas from "./kosarkas.js";

let kosarkas1 = new Kosarkas('Milan', 'Aleksandrovic', '1999', 'Vranje', [9, 8, 9, 7, 9, 9, 9, 100]);
let kosarkas2 = new Kosarkas('Predrag', 'Aleksandrovic', '1998', 'Vranje', [8, 9, 7, 9, 9, 9, 10, 10, 10]);
let kosarkas3 = new Kosarkas('Milos', 'Aleksandrovic', '1999', 'Vranje', [9, 5, 9, 7, 9, 9, 9]);
let kosarkas4 = new Kosarkas('Milos', 'Jovanovic', '1998', 'Presevo', [9, 8, 4, 9, 9]);
let kosarkas5 = new Kosarkas('Stefan', 'Jovanovic', '1992', 'Presevo', [7, 0, 9, 9]);

let nizKosarkasa = [kosarkas1, kosarkas2, kosarkas3, kosarkas4, kosarkas5]

function najviseUtakmica (niz) {
    let najviseUtakmicaKosarkas = niz[0]
    niz.forEach(kosarkas => {
        if(kosarkas.poeni.length > najviseUtakmicaKosarkas.poeni.length){
            najviseUtakmicaKosarkas = kosarkas
        }
    });
    return najviseUtakmicaKosarkas
}

console.log(najviseUtakmica(nizKosarkasa));

function najvisePoena(niz){
    let kosarkasSaNajvisePoena = niz[0]
    let najvisePoeni = 0
    kosarkasSaNajvisePoena.poeni.forEach(poen =>{
        najvisePoeni += poen
    })
    niz.forEach(kosarkas =>{
    let poeniKosarkasa = 0
    kosarkas.poeni.forEach(poen =>{
        poeniKosarkasa += poen;
    });
    if(poeniKosarkasa > najvisePoeni){
        najvisePoeni = poeniKosarkasa;
        kosarkasSaNajvisePoena = kosarkas
    }
    })
    return kosarkasSaNajvisePoena
}

console.log(najvisePoena(nizKosarkasa));

function najviseProsecnoPoena (niz){
    let kosarkasSaNajveciProsek;
    let najveciProsek = 0
    niz.forEach(kosarkas =>{
        let poeni = 0
        kosarkas.poeni.forEach(poen =>{
            poeni += poen
        })
        if((poeni / kosarkas.poeni.length)>najveciProsek){
            najveciProsek = poeni / kosarkas.poeni.length
            kosarkasSaNajveciProsek = kosarkas
        }
    })
    return kosarkasSaNajveciProsek
}

console.log(najviseProsecnoPoena(nizKosarkasa));