// drugi zadatak

let a = [6, 8, 9, 3, 1]

function zbirElemenata (niz, callback) {
    let suma = 0;
    niz.forEach(el => {
        suma += el; 
    });
    callback (suma);
}

let ispis = (s) =>{
    console.log(s);
}

zbirElemenata(a, ispis)

// Peti zadatak

let najvecaVrednost = (niz, cb) =>{
    let najveca = niz[0];
    niz.forEach(el =>{
        if(el > najveca){
            najveca = el
        }
    });
    cb(najveca)
}

let ispis5 = (p) =>{
    console.log(p);
}

najvecaVrednost(a, ispis)

// sedmi zadatak

let indeksMaksElementa = (niz, cb) =>{
    let maxBr = niz[0]
    let indeksMaks = 0;
    niz.forEach((e, index) =>{
        if(e > maxBr){
            maxBr = e;
            indeksMaks = index;
        }
    });
    cb(indeksMaks)
}

indeksMaksElementa(a, (p) => {
    console.log(p);
})