// Zadatak 6

let i = 1;
let sabiranje = 0;

while (i <= 100){
    sabiranje = sabiranje + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je: ${sabiranje}`);

// Zadatak 7)

i = 1;
let n = 60;
let suma = 0;

while (i <= n) {
    suma = suma + i;
    i++;    
}
console.log(`Suma brojeva od 1 do ${n} jednaka je: ${suma}`);


//Zadatak 8)

let a = 1;
n = 11;
let m = 22;
suma = 0;

if(n < m){
    while (n <= m) { 
        suma = suma + n;
        n++;
    }
    console.log(`Suma brojeva od ${m-n} do ${m} jednaka je: ${suma}`);
//               GREŠKA(ne može da stoji n-(n-1) jer se vraća na 1)
//               mora da se uradi sa i -kao iterator
} else {console.log("Greška");}

//Zadatak 9)

n = 3;
m = 6;
let proizvod = 1;

while(n <= m){
    proizvod = proizvod * n;
    n++;
}
console.log(`Proizvod svih brojeva od ${n} do ${m} jednak je: ${proizvod}`);


//ˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇNIJE ZAVRŠENˇˇˇˇˇˇˇˇˇˇˇˇˇˇ
// Zadatak 10.

n = 17;
m = 55;
suma = 0;
let kvadrat = 0;
let kub = 0;
let suma2 = 0; 
i = n;

while(i <= m){
    if(i % 2 == 0){
        kvadrat = n * n;
        suma = suma + kvadrat
    } else {
        kub = n * n * n;
        suma2 = suma2 + n;
    }
    i++;
    
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je ${suma}`);
console.log(`Suma kubova parnih brojeva od ${n} do ${m} jednaka je ${suma2}`);
//^^^^^^^^^^^^^^^^^^^^^^^^^NIJE ZAVRŠEN^^^^^^^^^^^^^^^^^^^^


//Zadatak 11

let k = 9;
let l = 1;
let brojač = 0;

while (l <= k) {
    if(k % l == 0){
        brojač = brojač + 1;
    }
    l++;
}
console.log(`Broj ${k} je deljiv sa ${brojač} broja`);

// Zadatak 12

k = 113;
l = 1;
brojač = 0;

while (l <= k) {
    if(k % l == 0){
        brojač = brojač + 1;
    }
    l++;
} 
if (brojač == 2) {
    console.log(`Broj ${k} je prost.`);
} else {
    console.log(`Broj ${k} je složen`);
}



/*------------RADIM PONOVO ISTE ZADATKE------------
1. ZADATAK
Ispisati brojeve od 1 do 20:
a) Svaki u istom redu
b) Svaki u novom redu
*/

let x = 1;

while (x <= 20) {
    console.log(x);
    x++;    
}

/* 
2. ZADATAK
Ispisati brojeve od 20 do 1.*/

x = 20;
while (x >= 1){
    console.log(x);
    x--;
}

/* 3. ZADATAK
Ispisati parne brojeve od 1 do 20.*/

x = 1;
while (x <= 20) {
    if(x % 2 == 0){
        console.log(x); 
    }
    x++;    
}

/* 4. ZADATAK
Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje*/

n = 3;
i = 1;
while (i <= n) {
    document.write(`<p class="boja${i}"> Paragraf broj ${i}</p>`)
    i++;
}

/* 5.ZADATAK 
Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
*/

n = 3;
i = 1;

while (i <= n){
    if(i % 2 == 0){
        document.write(`<img src="pozdaina.png" alt="pozadina" style="border: 2px dotted red;"></img>`);
    } else { document.write(`<img src="pozdaina.png" alt="pozadina" style="border: 2px double blue;">`)
    }
    i++;
}
/* 6. ZADATAK
Odrediti sumu brojeva od 1 do 100*/

suma = 0;
i = 1;

while (i <= 100) {
    suma = suma + i;
    i++;
}
console.log(suma);

/* 7.ZADATAK
Odrediti sumu brojeva od 1 do n*/

n = 15;
i = 1;
suma = 0;

while ( i <= n){
    suma = suma + i;
    i++;
}
console.log(suma);

/* 8.ZADATAK
Odrediti sumu brojeva od n do m */

n = 1;
m = 15;
i = 1;
suma = 0;

for(n = 1; n <= m; n++){
    suma = suma + n;
}
console.log(suma);

/*  9. ZADATAK
Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m*/

n = 1;
m = 5;
suma = 0;
suma2 = 0;
for ( n = 1; n <= m; n++){
    if( n % 2 == 0){
        suma = suma + (n * n);
    } else {
        suma2 = suma2 + (n * n * n);
    }
}
console.log(suma);
console.log(suma2);

/* 10. ZADATAK
Odrediti sa koliko brojeva je deljiv uneti broj k*/

k = 12;
brojač = 0;
for (i = 1; i <= k; i++){
    if (k % i == 0){
        brojač = brojač + 1;
    }
}
console.log(brojač);

/* 11.ZADATAK
Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.*/


k = 7;
brojač = 0;
for (i = 1; i <= k; i++){
    if (k % i == 0){
        brojač = brojač + 1;
    }
}
if( brojač == 2) {
    console.log(`${k} JE PROST`);
} else {
    console.log(`${k} NIJE PROST`);
}