// 1. Ispisati sve elemente niza od 5 stringova.

let niz = ["String 1", "String 22", "String 333", "String 4444", "String 55555"];
for (let i = 0; i < niz.length; i++){
    document.write(`${niz[i]} <br>`);
}

// 2. Odrediti zbir elemenata celobrojnog niza.
let celobrojni_niz = [3, 5, 7, 2, 5, 3, 6];

let određivanje_zbira_elemenata_celobrojnog_niza = (neki_niz_celih_brojeva) => {
    let zbir = 0;
    for (let i = 0; i < neki_niz_celih_brojeva.length; i ++){
        zbir = zbir + neki_niz_celih_brojeva[i];
    }
    return zbir;
}
document.writeln(`${određivanje_zbira_elemenata_celobrojnog_niza(celobrojni_niz)} <br>`);

// 3. Odrediti proizvod elemenata celobrojnog niza.
celobrojni_niz = [3, 5, 7, 2, 5, 3, 6];

let određivanje_proizvoda_elemenata_celobrojnog_niza = (neki_niz) => {
    let proizvod = 1;
    for (let i = 0; i < neki_niz.length; i++){
        proizvod *= neki_niz[i];
    }
    return proizvod
}
document.writeln(`${određivanje_proizvoda_elemenata_celobrojnog_niza(celobrojni_niz)} <br>`)

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
celobrojni_niz = [3, 5, 7, 2, 5, 13, 16, 99];

let određivanje_srednje_vrednosti_elemenata_celobrojnog_niza = (neki_niz) => {
    određivanje_zbira_elemenata_celobrojnog_niza(celobrojni_niz);
    let ukupan_broj_elemenata_u_nizu = 0;
    for ( let i = 0; i < neki_niz.length; i++){
        ukupan_broj_elemenata_u_nizu++
    }
    return (određivanje_zbira_elemenata_celobrojnog_niza(celobrojni_niz) / ukupan_broj_elemenata_u_nizu)
}

document.write(`${određivanje_srednje_vrednosti_elemenata_celobrojnog_niza(celobrojni_niz)} <br>`)

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
celobrojni_niz = [3, 5, 99, 2, 5, 3, 16, 99];

let određivanje_maksimalne_vrednosti_u_nekom_nizu = (neki_niz) => {
    let maksimalna_vrednost_pretpostavka = neki_niz[0];
    let broj_elemenata_koji_su_najveći = 0;
    for (let i = 1; i < neki_niz.length; i++){
        if (neki_niz[i] > maksimalna_vrednost_pretpostavka){
            maksimalna_vrednost_pretpostavka = neki_niz[i];
        }
    }
    for (let i = 0; i < neki_niz.length; i++){
        if (neki_niz[i] == maksimalna_vrednost_pretpostavka){
            broj_elemenata_koji_su_najveći++;
        }
    }
document.write(`Maksimalna vrednost u nizu je: ${maksimalna_vrednost_pretpostavka} i u nizu ima ${broj_elemenata_koji_su_najveći} koji imaju istu maksimalnu vrednost. <br>`)
}
određivanje_maksimalne_vrednosti_u_nekom_nizu(celobrojni_niz)

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.
celobrojni_niz = [3, 5, 7, 2, 5, 3, -16, 99];

let određivanje_minimalne_vrednosti_niza = (neki_niz) => {
    let minimalna_vrenost_pretpostavka = neki_niz[0];
    for (let i = 1; i < neki_niz.length; i++){
        if (neki_niz[i] < minimalna_vrenost_pretpostavka){
            minimalna_vrenost_pretpostavka = neki_niz[i];
        }
    }
    return minimalna_vrenost_pretpostavka;
}
document.write(`Minimalna vrednost niza je: ${određivanje_minimalne_vrednosti_niza(celobrojni_niz)}. <br>`)

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.
celobrojni_niz = [3, 5, 700, 2, 5, 3, 16, 99];

let određivanje_indeksa_maksimalnog_elementa_iz_niza = (neki_niz) => {
    let indeks_maksimalnog_elementa = 0;
    let maksimalni_element_pretpostavka = neki_niz[0];
    for (let i = 1; i < neki_niz.length; i++){
        if (neki_niz[i] > maksimalni_element_pretpostavka){
            maksimalni_element_pretpostavka = neki_niz[i];
            indeks_maksimalnog_elementa = i;
        }
    }
    document.write(`Maksimalni element iz niza je: ${maksimalni_element_pretpostavka}, a njegov indeks je: ${indeks_maksimalnog_elementa}. <br>`)
}

određivanje_indeksa_maksimalnog_elementa_iz_niza(celobrojni_niz)

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
celobrojni_niz = [3, 5, 7, 2, 5, 3, 16, -99];

let određivanje_indeksa_minimalnog_elementa_iz_niza = (neki_niz) => {
    let minimalna_vrenost_pretpostavka = neki_niz[0];
    let indeks_minimalnog_elementa = 0;
    for (let i = 1; i < neki_niz.length; i++){
        if (neki_niz[i] < minimalna_vrenost_pretpostavka){
            minimalna_vrenost_pretpostavka = neki_niz[i];
            indeks_minimalnog_elementa = i;
        }
    }
    document.write(`Minimalni element iz niza je: ${minimalna_vrenost_pretpostavka}, a njegov indeks je: ${indeks_minimalnog_elementa}.<br>`)
}
određivanje_indeksa_minimalnog_elementa_iz_niza(celobrojni_niz)

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
celobrojni_niz = [3, 5, 7, 2, 5, 3, 16, 99, 25, 99, 99, 80, 100,];

let određivanje_broja_elemenata_koji_su_veći_od_srednje_vrednosti_niza = (neki_niz) => {
    let zbir = 0;
    let ukupan_broj_elemenata_u_nizu = 0;
    for (let i = 0; i < neki_niz.length; i++){
        zbir += neki_niz[i];
        ukupan_broj_elemenata_u_nizu++;
    }
    let srednja_vrednost = zbir / ukupan_broj_elemenata_u_nizu;
    let broj_elemenata_koji_su_veći_od_srednje_vrednosti_niza = 0;
    for (let i = 0; i < neki_niz.length; i++){
        if (neki_niz[i] > srednja_vrednost){
            broj_elemenata_koji_su_veći_od_srednje_vrednosti_niza++;
        }
    }
    document.write(`Broj elemenata koji su veći od srednje vrednosti niza je: ${broj_elemenata_koji_su_veći_od_srednje_vrednosti_niza}. <br>`)
}
console.log(određivanje_broja_elemenata_koji_su_veći_od_srednje_vrednosti_niza(celobrojni_niz));

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
celobrojni_niz = [3, -5, 7, 2, -5, 3, 16, -99];

let određivanje_broja_pozitivnih_elemenata_u_nizu = (neki_niz) =>{
    let broj_pozitivnih_elemenata = 0;
    for (let i = 0; i < neki_niz.length; i++){
        if (neki_niz[i] > 0){
            broj_pozitivnih_elemenata++;
        }
    }
    return broj_pozitivnih_elemenata;
}

document.write (`Broj pozitivnih elemenata u nizu je: ${određivanje_broja_pozitivnih_elemenata_u_nizu(celobrojni_niz)} <br>`)

// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
celobrojni_niz = [3, -5, 7, 2, -5, 3, 16, -99, 8, 21, 22];

let određivanje_broja_parmenata_u_nizu = (neki_niz) =>{
    let broj_parnih_elemenata = 0;
    for (let i = 0; i < neki_niz.length; i++){
        if (neki_niz[i] % 2 == 0){
            broj_parnih_elemenata++;
        }
    }
    return broj_parnih_elemenata;
}

document.write (`Broj parnih elemenata u nizu je: ${određivanje_broja_parmenata_u_nizu(celobrojni_niz)} <br>`)

// 12. Odrediti broj parnih elemenata sa neparnim indeksom.
celobrojni_niz = [3, -5, 7, 2, -5, 3, 16, -99, 2, 2];

let određivanje_parnih_elemenata_sa_neparnim_indeksom = (neki_niz) => {
    let broj_parnih_elemenata_sa_neparnim_indeksom = 0;
    for (let i = 0; i < neki_niz.length; i++){
        if (neki_niz[i] % 2 == 0 && i % 2 != 0){
            broj_parnih_elemenata_sa_neparnim_indeksom++
        }
    } 
    return broj_parnih_elemenata_sa_neparnim_indeksom;
}
document.write(`Broj parnih elemenata sa neparnim indeksom je: ${određivanje_parnih_elemenata_sa_neparnim_indeksom(celobrojni_niz)} <br>`)

// 13. Izračunati sumu elemenata niza sa parnim indeksom.
celobrojni_niz = [3, -5, 7, 2, -5, 3, 16, -99];
//                0   1  2  3   4  5   6    7

let određivanje_sume_elemenata_sa_parnim_indeksom = (neki_niz) => {
    let suma = 0;
    for (let i = 0; i < neki_niz.length; i++){
        if (i % 2 == 0){
            suma = suma + neki_niz[i];
        }
    }
    return suma;
}

document.write(`Sumaelemenata sa parnim indeksom je ${određivanje_sume_elemenata_sa_parnim_indeksom(celobrojni_niz)} <br>`)


// 14. Promeniti znak svakom elementu celobrojnog niza.
celobrojni_niz = [3, -5, 7, 2, -5, 3, 16, -99];
//                0   1  2  3   4  5   6    7

let promena_znaka_svakom_elementu_u_nizu = (neki_niz) => {
    for (let i = 0; i < neki_niz.length; i++){
        neki_niz[i] = neki_niz[i] * -1;
    }
    return neki_niz
}

document.write(`${promena_znaka_svakom_elementu_u_nizu(celobrojni_niz)}`)






// Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
// Ispisati dužinu svakog elementa u nizu stringova. 
// Odrediti element u nizu stringova sa najvećom dužinom.
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
