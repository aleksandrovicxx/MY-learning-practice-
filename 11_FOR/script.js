// Prvi zadatak. ISPISATI BROJEVE OD 1 DO 20

let i = 1;
while (i <= 20){
    console.log(`Broj ${i}`);
    i++;
}

for(let j = 1; j <= 20; j++){
    console.log(`Ovo je broj ${j}`);
}

//Drugi zadatak

for(let k = 20; k >= 1; k--){
    console.log(`Ovo je k ${k}`)
}


// Peti zadatak

let suma = 0;
let n = 5;
for (let p = 1; p <= n; p++){
    suma = suma + p;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

// Treći zadatak

for (i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(`${i} je parni broj`);
    }
}

// Drugi način TREĆI

for (i = 2; i <= 20; i +=2){
    console.log(i);
}

// Četvrti zadatak

for (i = 5; i <= 15; i++){
    console.log(`${i*2} je dvostruka vrednost broja ${i}`);
}

// Šesti zadatak

n = 2;
m = 17;
suma = 0;
for (n; n <= m; n++){
    suma = suma + n;
}
console.log(`Suma brojeva je: ${suma}`);

// Sedmi zadatak

n = 9;
m = 13;
proizvod = 1;
for(n; n <= m; n++){
    proizvod = proizvod * n;
}
console.log(`Proizvod brojeva je: ${proizvod}`);

// Osmi zadatak

n = 1;
m = 10;
let sumakvadrata = 0;

for(n; n <= m; n++){
    sumakvadrata = sumakvadrata + (n * n);
}
console.log(`Suma kvadrata brojeva je: ${sumakvadrata}`);

// Deveti zadatak

for ( i = 1; i <= 3; i++){
    document.write(`<img src="slike/${i}.png">`);
}

// Dvanaesti zadatak
n = 3;
m = 6;
brojač = 0;
suma = 0
for(n; n <= m; n++){
    suma = suma + n
    brojač++;
}
let arSredina= suma / brojač;
console.log(`Aritmetička sredina je: ${arSredina}`);

// Deseti zadatak

proizvod = 1;
for(i=20; i <= 100; i++){
    if(i % 11 == 0){
        proizvod = proizvod * i;
    }
}
console.log(`Proizvod brojeva deljivih sa 11 u intervalu od 20 do 100 je ${proizvod}`);

//Jedanaesti zadatak

brojač = 0;
for(i = 5; i <= 150; i++){
    if(i % 13 == 0){
        brojač = brojač + 1
    }
}
console.log(`Postoje ${brojač} brojeva koji se mogu podeliti sa 13 i nalaze se u intervalu od 5 do 150`);

// Šesnaesti zadatak

n = 3;
m = 9;
suma = 0;
a = 4;

for(i = n; i <= m; i++){
    if( i % a != 0){
        suma = suma + i;
    }
}
console.log(`Szma brojeva od ${n} do ${m} koji nisu deljivi sa ${a} je ${suma}`);
// i = 3, suma = 3
// i = 4, suma = 3
// i = 5, suma = 8
// i = 6, suma = 14 
// i = 7, suma = 21
// i = 8, suma = 21
// i = 9, suma = 30

// Trinaesti zadatak

n = -5;
m = 10;
let brojačpoz = 0;
let brojačneg = 0;
for( i = n; i <= m; i++){
    if(i > 0){
        brojačpoz++;
    } else if (i < 0){
        brojačneg++;
    }
}
console.log(`Ukupan broj pozitivnih brojeva između ${n} i ${m} je: ${brojačpoz}`);
console.log(`Ukupan broj negativnih brojeva između ${n} i ${m} je: ${brojačneg}`);

// Četrnaesti zadatak
brojač = 0;
for( i = 0; i <= 9; i++ ){
    if ( i % 3 == 0 || i % 5 == 0){
        brojač++;
    }
}
console.log(brojač);

// Petnaesti zadatak

n = 2;
m = 16;
brojač = 0;
suma = 0;

for ( i= n; i <= m; i++){
    if( i % 10 == 4){
        brojač++;
        suma = suma + i;
    }
}
console.log(brojač);
console.log(suma);

// Sedamnaesti zadatak

n = 2;
m = 15;
proizvod = 1;
a = 4;
for( i = n; i <= m; i++){
    if (i % a == 0){
        proizvod = proizvod * i;
    }    
}
console.log(proizvod);

// Osamnaesti zadtak

k = 15;
let brojBrojeva = 0;
for(i = 1; i <= k; i++){
    if( k % i == 0){
        brojBrojeva++;
    }
}
console.log(`Broj ${k} deljiv je sa ${brojBrojeva} brojeva`);

// Drugi način
k = 4;
brojBrojeva = 2;
if (k == 1){
    brojBrojeva = 1;
} else {
    brojBrojeva = 2;
    for (i = 2; i <= k/2; i++){
        if (k % i == 0) {
            brojBrojeva++;
        }
    }
} 
console.log(`Broj ${k} je deljiv sa ${brojBrojeva} brojeva`);

// Dvadeseti zadatak

let divTabela = document.getElementById(`tabela`);
let tabela = `<table>`;
for(i=1; i<=6; i++) {
    let obojen = "belo";
    if (i % 2 ==0){
        obojen = "roze"        
    }
    tabela += 
    `<tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`;
}
tabela += `</table>`;
divTabela.innerHTML = tabela;

// DVADESETI ZADATAK

for (i = 1; i <= 6; i++){
    if (i % 2 == 0){
        document.write(`
        <table>
        <tr>
            <td style="background-color: pink;">
                Tekst
            </td>
            <td style="background-color: pink;">
                Tekst
            </td>
        </tr>
    </table>    `)
    } else {
        document.write(`
        <table>
        <tr>
            <td >
                Tekst
            </td>
            <td>
                Tekst
            </td>
        </tr>
    </table>`)
    }
}