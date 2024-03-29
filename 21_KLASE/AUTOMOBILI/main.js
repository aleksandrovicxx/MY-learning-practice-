import Film from "./film.js"

let film1 = new Film(`Cuvari formule`, `Dragan Bjelogrlic`, 2023, [9, 10, 8, 8, 6, 10, 10, 9]);
let film2 = new Film(`Klopka`, `Srdjan Golubovic`, 2007, [9, 7, 10, 10, 8, 6]);
let film3 = new Film(`Maratonci trce pocasni krug`, `Slobodan Sijan`, 1982, [8, 9.1, -8, 18, 9]);
let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();

console.log(`Ispis for petljom`);

for (let i = 0; i < filmovi.length; i++){
    filmovi[i].stampaj()
}

console.log(`Ispis forEach petljom`);

filmovi.forEach(f => {
    f.stampaj()
})

console.log(film3);

console.log(`Prosecna ocena filma ${film1.naslov} je ${film1.prosecna()}`);

//Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
//1801-1900 - 19vek
//1901-2000 - 20vek
//2001-... - 21 vek

let vekFilmova = (filmovi, vek) => {
    filmovi.forEach(f => {
        //1801/100 = 18.01 = Math.ceil 19
        //1900/100 = 19 Math.ceil 19
        let vekFilma = Math.ceil(f.godinaIzdanja/100)
        if (vekFilma == vek){
            f.stampaj()
        }
    });
}

let prosecnaOcena = niz => {
    let suma = 0;
    let br  = 0;
    niz.forEach(f => {
        f.ocene.forEach(o => {
            suma += o;
            //br++;
        });
        br += f.ocene.length;
    });
    return suma/br;
}

console.log(prosecnaOcena(filmovi));

let najcescaOcena = niz => {
    let pet = 0;
    let sest = 0;
    let sedam = 0;
    let osam = 0;
    let devet = 0;
    let deset = 0;
    niz.forEach(film => {
        film.ocene.forEach(ocena => {
            switch(ocena) {
                case 5:
                    pet++;
                    break;
                case 6:
                    sest++;
                    break;
                case 7:
                    sedam++;
                    break;
                case 8:
                    osam++;
                    break;
                case 9:
                    devet++;
                    break;
                case 10:
                    deset++;
                    break; 
            }
        });
    });
    let nizOcena = [pet, sest, sedam, osam, devet, deset];
    let ocenaSaNajvecimBrojem = nizOcena[0]
    let index = 0;
    nizOcena.forEach((o, i) => {
        if (o >= ocenaSaNajvecimBrojem){
            ocenaSaNajvecimBrojem = o;
            index = i+5
        }
    });
    return index;
}

console.log(najcescaOcena(filmovi));

let iznadOcene = (ocena, niz) => {
    let nizFilmova = []
    niz.forEach(film => {
        let zbir = 0;
        let brojac = 0;
        film.ocene.forEach(ocena => {
            zbir += ocena;
            brojac++;
        });
        let prosek = zbir/brojac
        if(prosek > ocena){
            nizFilmova.push(film)
        }
    });
    return nizFilmova
} 
console.log(iznadOcene(7, filmovi));

let iznadOceneNoviji = (ocena, niz) => {
    let iznadOceneNiz = iznadOcene(niz, ocena)
    let mladjiFilm = niz[0];
    niz.forEach(film => {
        if(film.godinaIzdanja > mladjiFilm){
        mladjiFilm = film
        }
    });
    return mladjiFilm
}

let najboljeOcenjeniFilm = niz => {
    let najboljeOcenjeni = niz[0];
    let najboljaOcena = najboljeOcenjeni.prosecna()
    niz.forEach(film =>{
        if(film.prosecna() > najboljaOcena){
            najboljaOcena = film.prosecna()
            najboljeOcenjeni = film
        }
    });
    return najboljeOcenjeni
}

console.log(`Najbolje ocenjen je film: ${najboljeOcenjeniFilm(filmovi).naslov}`);

let najmanjaOcenaNajboljeg = niz => {
    let najboljiFilm = najboljeOcenjeniFilm(niz)
    let najmanjaOcena = najboljiFilm.ocene[0]
    najboljiFilm.ocene.forEach(ocena => {
        if(ocena < najmanjaOcena){
            najmanjaOcena = ocena;
        }
    });
    return najmanjaOcena
}

console.log(`Najmanja ocena je: ${najmanjaOcenaNajboljeg(filmovi)}`);

let osrednjiFilm = niz => {
    let prosecnaOcenaSvih = prosecnaOcena(niz)
    let najmanjaProsecnaOcena = niz[0].prosecna()
    let najmanjaRazilka = Math.abs(prosecnaOcenaSvih - najmanjaProsecnaOcena)
    let filmNajblizi = niz[0]
    niz.forEach(film => {
        console.log(film.prosecna());
        if(Math.abs((prosecnaOcenaSvih - film.prosecna())) < najmanjaRazilka){
            najmanjaRazilka = prosecnaOcenaSvih - film.prosecna();
            filmNajblizi = film
        }
    });
    console.log(filmNajblizi)
}
osrednjiFilm(filmovi)

let najmanjaOcena = niz => {
    let najmanjaOcena = niz[0].ocene[0];
    niz.forEach(film => {
        film.ocene.forEach(ocena =>{
            if (ocena < najmanjaOcena){
                najmanjaOcena = ocena;
            }
        });
    });
    return najmanjaOcena
}

console.log(najmanjaOcena(filmovi));