function neparan (n) {
    let x; // x - važi u bloku u kojem je definisan
    if ( n % 2 == 1){
        x = true;
    } else {
        x = false;
    }
    return x;    

}

function neparan2 (n){
    if ( n % 2 == 1){
        var x = true; // var   dostupna unutar funkvije u kojoj je definisana (dostupna je i van if, ali ne i van function)
    } else {
        var x = false;
    }
    return x;
}

let p  = 5

console.log(neparan (p));

let neparan3 = (n) => {
    let x = false
    if (n % 2 == 1){
        x = true
    }
    return x;
}

let neparan4 = (n) => {
    return (n % 2 == 1) ? true : false;  // TERNARNI OPERATOR ( ? : )
}

console.log(neparan4(6));

let neparan5 = (n) => {
    return (n % 2 == 1)
}

console.log(neparan5(6));

let neparan6 = (n) => (n % 2 == 1);
console.log(neparan6(2));

let uvecajZaDva = (n) => (n += 2);
console.log(uvecajZaDva(5));

let neparan7 = n => (n % 2 == 1);
console.log(neparan7(2));

// 1. ZADATAK

let maks2 = (n, m) => n > m ? n: m;

console.log(maks2 (888, 99));

let maks4 = (n, m, a, b) => maks2(maks2 (n, m), maks2 (a, b));

console.log(maks4(-20000, -88, 12, -100));

// 2. ZADATAK

let slika = (adresa) => `<img src="${adresa}" alt="">`;

let d1 = document.getElementById("d1");
d1.innerHTML += slika("1.png");
d1.innerHTML += slika("slika.jpg");