// 3. Zadatak
function neparan (n){
    if (n % 2 == 0){
        return "Broj je paran"
    } else {
        return "Broj je neparan"
    }
} 

console.log(neparan(4));

// 4. Zadatak
const maks2Function = (broj1, broj2) => {
    if (broj1 > broj2) {
        return broj1;
    } else {
        return broj2;
    }
}
const maks4Function = (a, b, c, d) => {
    return maks2Function(maks2Function(a, b), maks2Function(c, d));
}
console.log(maks4Function(20, 11, 16, 18));

function veciOdDvaBroja (a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}
function veciOdCetiriBroja (a, b, c, d){
    return veciOdDvaBroja(veciOdDvaBroja(a, b), veciOdDvaBroja(c, d))
}
console.log(veciOdCetiriBroja(2, 18, 166, 20));

// 5. ZADATAK
function prikaziSliku (adresa){
    document.write(`<img src="${adresa}">`)
}
prikaziSliku ("https://rasadnikgaj.com/images/vrtno%20cvece/lepi-covek-cvet-1.jpg");
prikaziSliku ("1.png");

// 5. ZADATAK - kompleksnije
// Funkcija koja prikazuje prosleđenu sliku i prosleđen id elementa u kome ta slika treba da se prikaže.
function prikaziSlikuUElementu (putanja, id){
    let element = document.getElementById(id);
    element.innerHTML = `<img src="${putanja}">`;
}
prikaziSlikuUElementu("1.png", "slika1");

// 6. ZADATAK

function ispisiIObojiTekst (boja){
    document.write(`<p style="color: ${boja};">Lorem Ipsum</p>`)    
}

ispisiIObojiTekst ("red");

// 7. ZADATAK

function sedmiDan (n){
    if (n == 0 || n == 7){
        console.log("Nedelja")
    } else if (n == 1){
        console.log("Ponedeljak")
    } else if (n == 2){
        console.log("Utorak")
    } else if (n == 3){
        console.log("Sreda")
    } else if (n == 4){
        console.log("Četvrtak")
    } else if (n == 5){
        console.log("Petak")
    } else {
        console.log("Pogrešan unos");
    }
}
sedmiDan (8)