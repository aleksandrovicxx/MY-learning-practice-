//Zadatak 19:
let imena = ["Stefan", "Jelena", "Marko", "Miloš", "Bratislav", "Ljiljana"]

let dužinaSvakogElementa = (niz) => {
    for(let i = 0; i < niz.length; i++){
        //niz[i] je string
        let s = niz[i];
        console.log(s.length);
    }
}

dužinaSvakogElementa(imena);

// Zadatak 20:
imena = ["Stefan", "Jelena", "Marko", "Miloš", "Bratislav", "Ljiljana"]

let elementSaNajvećomDužinom = (niz) => {
    let maxString = niz[0];
    let maxDužina = maxString.length;
    for (let i = 0; i < niz.length; i++){
        let s = niz[i];
        if (s.length > maxDužina){
            maxString = s;
            maxDužina = s.length;
        }
    }
    return maxString;
}
console.log(elementSaNajvećomDužinom(imena));


// Zadatak 20': indeks elementa sa max dužinom
imena = ["Stefan", "Jelena", "Marko", "Miloš", "Bratislav", "Ljiljana"]

let indexElementaSaNajvećomDužinom = (niz) => {
    let maxString = niz[0];
    let maxDužina = maxString.length;
    let maxIndex = 0;
    for (let i = 0; i < niz.length; i++){
        let s = niz[i];
        if (s.length > maxDužina){
            maxString = s;
            maxDužina = s.length;
            maxIndex = i;
        }
    }
    return maxIndex;
}
console.log(indexElementaSaNajvećomDužinom(imena));

// Zadatak 21:
imena = ["Stefan", "Jelena", "Marko", "Miloš", "Bratislav", "Ljiljana"]

let prosečnaDužina = niz => {
    let zbirDužina = 0;
    for (let i = 0; i < niz.length; i++){
        let s = niz[i];
        zbirDužina += s.length;
    }
    return zbirDužina / niz.length
}

let brojNatprosečnoDugih = niz => {
    let pd = prosečnaDužina(niz);
    let broj = 0;
    for (let i = 0; i < niz.length; i++){
        let s = niz[i];
        if (s.length > pd){
            broj++;
        }
    }
    return broj;
}

console.log(prosečnaDužina(imena));
console.log(brojNatprosečnoDugih(imena));

// Zadatak 22.
imena = ["Stefan", "Jelena", "Marko", "Miloš", "Bratislav", "Ljiljana"];

let određivanjeBrojaElemenataSaA = niz =>{
    let brojElemenataSaA = 0;
    for (let i = 0; i < niz.length; i++){
        let s = niz[i];
        for (let k = 0; k < s.length; k++){
            if ("a" == s[k]){
                brojElemenataSaA++;
                break;
            }
        }
    }
    return brojElemenataSaA
}
console.log(određivanjeBrojaElemenataSaA(imena));

// Zadatak 23.
imena = ["Stefan", "Jelena", "Marko", "Miloš", "Bratislav", "Ljiljana", "Ana", "Milica", "Aleksandra", "Aleksa"];

let određivanjeBrojaElemenataKojiPočinjuSaAIliA = niz =>{
    let brojElemenataKojiPočinjuSaAIliA = 0;
    for (let i = 0; i < niz.length; i++){
        let s = niz[i];
        if (s[0] == "a" || s[0] == "A"){
            brojElemenataKojiPočinjuSaAIliA++
        }
    }
    return brojElemenataKojiPočinjuSaAIliA;
}

console.log(određivanjeBrojaElemenataKojiPočinjuSaAIliA(imena));

//DRUGI NAČIN
imena = ["Stefan", "Jelena", "Marko", "aMiloš", "ABratislav", "Ljiljana", "Ana", "Milica", "Aleksandra", "Aleksa"];

let određivanjeBrojaElemenataKojiPočinjuSaAIliA2 = niz =>{
    let brojElemenataKojiPočinjuSaAIliA = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i].startsWith(`a`) || niz[i].startsWith(`A`)){
            brojElemenataKojiPočinjuSaAIliA++
        }
    }
    return brojElemenataKojiPočinjuSaAIliA;
}

console.log(određivanjeBrojaElemenataKojiPočinjuSaAIliA2(imena));

// Zadatak 24.
x = [4, 5, 6, 7, 5, 2, 2, 7, 2, 4, 9]
y = [7, 5, 7, 2, 4, 3, 5, 2, 1, 3, 8]

let zad24a = (a, b) => {
    let n = a.length; // n = b.length
    let c= [];
    for (let i = 0; i < n; i++){
        c.push(a[i], b[i]);
    }
    return c
}

console.log(zad24a(x, y));

let zad24b  = (a, b) => {
    let n = a.length;
    let c = [];
    for (let i = 0; i < n; i++){
        c[2 * i] = a[i];
        c[(2 * i) + 1] = b[i];
    }
    return c;
}

console.log(zad24b(x, y));

// Zadatak 25.
x = [4, 5, 6, 7, 5, 2, 2, 7, 2, 4, 9];
y = [7, 5, 7, 2, 4, 3, 5, 2, 1, 3, 8];

let množenjeElemenataIzNizova = (a, b) => {
    let n = a.length; 
    let c = []; 
    for (let i = 0; i < n; i++){
        let proizvod = a[i] * b[i];
        c[i] = proizvod;
    }
    return c;
}
console.log(množenjeElemenataIzNizova(x, y));

// Zadatak 26.
x = [4, 5, 6, 7, 5, 2, 2, 7, 2, 4, 9];
//   0  1  2  3  4  5  6  7  8  9  10

let formiranjeNizaNaOsnovuFormule = a => {
    let n = a.length/2;
    let b =[];
    for (let i = 0; i < n; i++){
        b[i] = (a[i] + a[2 * n - 1 - i] / 2)
    }
    return b
}
console.log(formiranjeNizaNaOsnovuFormule(x));