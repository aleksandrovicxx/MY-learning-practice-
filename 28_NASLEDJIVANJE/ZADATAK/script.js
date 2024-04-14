import { Osoba } from "./Klase/osoba.js";
import { Zaposleni } from "./Klase/zaposleni.js";

let osoba1 = new Osoba ('Milos', 'Aleksandrovic', 1999)
osoba1.ispisOsobe()

let zaposleni1 = new Zaposleni('Milan', 'Aleksandrovic', 1999, 100000, 'Kontrolor')
zaposleni1.dopisPlateIPozicije()

let zaposleni2 = new Zaposleni('Stefana', 'Aleksandrovic', 2000, 70000, 'Ekonomista');
if(zaposleni2.pozicija == 'Ekonomista'){
    zaposleni2.ekonosmista()
} else {
    zaposleni2.dopisPlateIPozicije()
}

let nizRadnika = [zaposleni1, zaposleni2]
 function prosekPlate (niz){
    let plate = 0
    let brojac = 0
    niz.forEach(radnik => {
        plate += radnik.plata
        brojac++
    });
    return plate / brojac;
}
console.log(prosekPlate(nizRadnika));

function natprosecnaPlata (osoba) {
    let prosecnaPlata = prosekPlate(nizRadnika)
    if(osoba.plata > prosecnaPlata){
        return true
    } else {
        return false
    }
}

console.log(natprosecnaPlata(zaposleni2));