import Pacijent from "./pacijent.js";


let pacijent1 = new Pacijent(`Milos`, 170, 75);
let pacijent2 = new Pacijent(`Filip`, 192, 95);
let pacijent3 = new Pacijent(`Milan`, 165, 65);
pacijent1.Stampaj()
console.log(pacijent1.Bmi());
console.log(pacijent2.Kritical());
let pacijenti = [pacijent1, pacijent2, pacijent3];

let pacijentSaNajmanjomTezinom = niz => {
    let minTezinaPacijent = niz[0]; // Cuva ceo objekat
    let minTezina = minTezinaPacijent.tezina; // Cuva samp tezinu

    niz.forEach(p => {
        if(p.tezina < minTezina){
            minTezina = p.tezina;
            minTezinaPacijent = p;
        }
    });
    return minTezinaPacijent
}

let pacijentSaNajvecimBmi = niz =>{
    let najveciBmiPacijent = niz[0]
    let najveciBmi = najveciBmiPacijent.Bmi() 
    
    niz.forEach(pacijent =>{
        if(pacijent.Bmi() > najveciBmi){
            najveciBmi = pacijent.Bmi();
            najveciBmiPacijent = pacijent
        }
    })
    return najveciBmiPacijent
}

let sviPacijentiNaA = niz =>{
    let nizPacijenata = []
    niz.forEach(pacijent =>{
        if(pacijent.ime[0] == 'a' || pacijent.ime[0] == 'A'){
            nizPacijenata.push(pacijent)
        }
    });
    return nizPacijenata
}

let srednjaVisina = niz =>{
    let visine = 0;
    let cntr = 0;
    niz.forEach(pac =>{
        visine += pac.visina;
        cntr++;
    });
    return visine / cntr;

}

// let rez = pacijentSaNajmanjomTezinom(pacijenti)
// rez.Stampaj()

pacijentSaNajmanjomTezinom(pacijenti).Stampaj()
pacijentSaNajvecimBmi(pacijenti).Stampaj()
console.log(sviPacijentiNaA(pacijenti));
console.log(srednjaVisina(pacijenti));