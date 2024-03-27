// 1. Dohvatiti element na koji želimo da posatvimo osluškivač
let btnHello = document.getElementById("hello");

//2. Postavimo osluškivač na element koji smo dohvatili
btnHello.addEventListener("click", () => {
    console.log("Hello!");
});

btnHello.addEventListener("dblclick", () => {
    console.log("Hello hello!!");
})
// 1 ZADATAK
let btnBroji = document.getElementById("broji");
let pIspisBroja = document.getElementById("ispisbroja")

let br = 1;
btnBroji.addEventListener("click", () => {
    console.log(`Broj je ${br}`);

    // 2 ZADATAK
    pIspisBroja.innerHTML = `Broj je ${br}`

    br++;
})


// 3 ZADATAK
let b = 0;
let btnPlus = document.getElementById("btnplus");
let btnMin = document.getElementById("btnmin");
let span = document.getElementById("span")
span.append(b)
btnPlus.addEventListener("click", () => {
    b++
    span.innerHTML = b 
});
btnMin.addEventListener("click", () => {
    b--
    // 4 ZADATAK
    if (b < 0) {
        b = 0;
    }
    span.innerHTML = b 
});

// 5 ZADATAK

let btnIspisiTekst = document.getElementById("ispišiTekst");
let pIspisTeksta = document.getElementById("ispisTeksta");
let inputTekst = document.getElementById("tekst");

btnIspisiTekst.addEventListener("click", () => {
    pIspisTeksta.innerHTML = `Zdravo ${inputTekst.value}`;
});

// 6 ZADTAK
let radioMuški = document.getElementById("muški");
let radioŽenski = document.getElementById("ženski");
let radioNeopredeljen = document.getElementById("neopredeljen");
btnIspisiTekst.addEventListener("dblclick", () => {
    // Prvi način
    if (radioMuški.checked){
        console.log("Osoba je muškog pola");
    } else if ( radioŽenski.checked){
        console.log("Osoba je ženskog pola");
    } else {
        console.log("Osoba se nije opredelila");
    } 
    // Drugi način
    //Selektuj mi input polje čiji atribut name ima vrednost pol i pri tome čekiran je
    let checkedPol = document.querySelector("input[name ='pol']:checked");
    console.log(`Osoba je ${checkedPol.value} pola`);
    // Treći način
    //Selektuj mi sve radio button po name atributu
    let polRadios = document.getElementsByName("pol")
    polRadios.forEach(radioButton => {
        if (radioButton.checked){
            console.log(`Osoba je ${radioButton.value} pola`);
        }
    });
    // 4 NAČIN
    let polRadioInput = document.querySelectorAll("input[name='pol']")
    polRadioInput.forEach(rb =>{
        if (rb.checked)
        console.log(`Osoba je ${rb.value} pola`);
    });
});

// 7 ZADATAK
let input = document.getElementById("kvadrat");
let ispis = document.getElementById("paragraf")
let dugme = document.getElementById("btnKv")
dugme.addEventListener("click", () => {
    let rezultat = input.value**2;
    ispis.innerHTML += rezultat;
});

let inputPolovina = document.getElementById("polovina");
let btnPolovina = document.getElementById("btnPolovina")
let ispisPolovina = document.getElementById("ParagrafPolovina")
btnPolovina.addEventListener("click", () => {
    let polovina = inputPolovina.value/2;
    ispisPolovina.innerHTML += polovina;
})

let povrsina = document.getElementById("površina")
let btnPovršina = document.getElementById("btnPovršina")
let ispisPovršina = document.getElementById("ispisPovršina")
btnPovršina.addEventListener("click", () => {
    let rez = povrsina.value**2*Math.PI
    ispisPovršina.innerHTML += rez
})
// 8 ZADATAK


