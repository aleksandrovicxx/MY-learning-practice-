console.log("Funkcije");

////////////////////////////////////////////////////////
// Funkcija za ispis u konzoli
////////////////////////////////////////////////////////

function zdravo(){
    console.log(`Hello world!`);
}
zdravo();// Poziv funkcije
zdravo();

////////////////////////////////////////////////////////
// Funkcija za ispis prosleđenog teksta u konzoli (prosleđuje se jedan parametar)
////////////////////////////////////////////////////////

function ispisiTekst (tekst){
    console.log(tekst);
}
ispisiTekst("Ovo je neki tekst."); // Poziv kada prosleđujemo neku vrednost
ispisiTekst("Ovo je neki drugi tekst.");
let t = "Moj tekst";
ispisiTekst(t);

////////////////////////////////////////////////////////
// Funkcija kojoj se prosleđuju više parametra
////////////////////////////////////////////////////////

function imePrezime (ime, prezime, godine){ //PARAMETRI
    console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${godine} god.`);
}
imePrezime ("Miloš", "Aleksandrović", 24); // ARGUMENTI
let imeOsobe = "Stefan";
let godineOsobe = 34;
imePrezime (imeOsobe, "Stanimirović", godineOsobe);


////////////////////////////////////////////////////////
// Funkcija koja vrši sabiranje dva broja
////////////////////////////////////////////////////////

function zbir(br1, br2){
    let rezultat = br1 + br2;
    console.log(`${br1} + ${br2} = ${rezultat}`)
}
zbir (16, 21);
let b1 = -10;
let b2 = 20;
zbir(b1, b2);
zbir(5+4, 50);
zbir ("Java", "Script");

////////////////////////////////////////////////////////
// funkcija vraća vrednost
////////////////////////////////////////////////////////
function razlika (umanjenik, umanjilac){
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}
console.log(`Razlika je ${razlika(60, 45)}`);
let r = razlika(100, 4);
console.log(`Funkcija vraća ${r}`);

let r1 = razlika(6, 3); // r1 = 3
let r2 = razlika(17, 7); // r2 = 10
let r3 = razlika(r1, r2); // r3 = -7
console.log(`Promenljiva r3 iznosi ${r3}.`);
let r4 = razlika(razlika(40, 60), razlika(10, 4));
console.log(`Promenljiva r4 iznosi ${r4}`);

////////////////////////////////////////////////////////
// Funkcija sa više returna
////////////////////////////////////////////////////////
function temperaturaVode (temp){
    if (temp <= 0){
        return "Voda se ledi";
    } else if (temp >= 100){
        return "Voda isparava";
    } else {
        return "Voda je u tečnom agregatnom stanju"
    }
} 
console.log(temperaturaVode(-5));
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

////////////////////////////////////////////////////////
// Funkcija sa više returna | DRUGI NAČIN
////////////////////////////////////////////////////////

function temperaturaVode1 (temp){
    let tekstZaIspis = "";
    if (temp <= 0){
        tekstZaIspis = "Voda se ledi";
    } else if (temp >= 100){
        tekstZaIspis = "Voda isparava";
    } else {
        tekstZaIspis = "Voda je u tečnom agregatnom stanju"
    }
    return tekstZaIspis;
}
console.log(temperaturaVode1(50));
/*
////////////////////////////////////////////////////////
// Funkcija sa više returna | TREĆI NAČIN
////////////////////////////////////////////////////////

function temperaturaVode2 (temp){
    let tekstZaIspis = "Voda je u tečnom stanju";
    if (temp <= 0){
        tekstZaIspis = "Voda se ledi";
    } else if (temp >= 100){
        tekstZaIspis = "Voda isparava";
    } 
    return tekstZaIspis;
}
console.log(temperaturaVode2(-50));
let pTempVode = document.getElementById("tempCode");
pTempVode.innerHTML = temperaturaVode2(100);

// 8. ZADATAK
*/
function deljivSaTri (n, m){
    let brojač = 0;
    for(let i = n; i <= m; i++){
        if (i % 3 ==0){
            console.log(i);
            brojač++;
        }
    }
    console.log(`U intervalu od ${n} do ${m} ima ${brojač} brojeva deljivih brojem 3`);
    return brojač;
}
console.log(`Hello ${deljivSaTri(4, 7)}`);
// deljivSaTri (10, 30);
// deljivSaTri (2, 10);

// 9. Zadatak

function sumiraj (n, m){
    suma = 0;
    for (let i = n; i <= m; i++){
        suma = suma + i;
    }
    return suma;
}

console.log(sumiraj (15, 20));

// 10. ZADATAK 

function množi (n, m){
    let proizvod = 1;
    for ( i = n; i <= m; i++){
        proizvod = proizvod * i;
    }
    return proizvod
}

console.log(množi (19, 24));

// 11. ZADATAK

function aritmetička (n, m){
    brojač = 0;  
    suma = 0;  
    for ( i = n; i <= m; i++){  
        brojač++;  
        suma = suma + i;  
    }
    console.log(suma / brojač);
}
(aritmetička(5, 10));

// 12. ZADATAK 

function aritmetickaTri (n, m){
    suma = 0;
    brojač = 0;
    for ( i = n; i <= m; i++){
            if (i % 10  == 3){
            suma = suma + i;
            brojač++;
        }
    }
    return suma / brojač;
}

console.log(aritmetickaTri(0, 33));

// 13. ZADATAK

function veličinaFonta (n){
    document.write(`<p style="font-size: ${n}px;">Lorem ipsum dolor sit amet.</p>`)
}
veličinaFonta (20)

// 14. ZADATAK

function rečenica5 (){
    for ( i = 1; i <= 5; i ++){
        document.write(`<p style="font-size: ${i*5}px;">Lorem ipsum dolor sit amet.</p>`)
    }
}

rečenica5 ();

// 15. ZADATAK  (a)
/*
let n = 6;
let a = 60000;
let d = 5000;
*/
function poslednjaPlata (n, a, d){
    for (i = 1; i <= n; i++){
        a = a + d;
    }
    console.log(`Poslednjeg meseca plata će nam biti ${a}.`);
}

poslednjaPlata (10, 1000, 50);

// 15. ZADATAK  (b)

function ukupnaPlata (n, a, d){
    let ukupno = a;
    for (i = 1; i <= n; i++){
        a = a + d;
        ukupno = ukupno + a;
    }
    console.log(`Ukupno ćemo zaraditi ${ukupno} nakon ${n} meseci rada.`);
}

ukupnaPlata (10, 1000, 50);

// 16. ZADATAK

function igreBezGranica (t, p, n){
    if (t<p || t>p+n){
        console.log(`Čekanje je 0s.`);
    } else {
        let čekanje = p + n - t;
        console.log(`Takmičar je potrebno da sačeka ${čekanje}s.`);
    }
}

igreBezGranica (15, 20, 25);
igreBezGranica (15, 10, 12);