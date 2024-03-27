//DOM
let inputNumber1 = document.getElementById("br1");
let inputNumber2 = document.getElementById("br2");
let btnRačunaj = document.getElementById("računaj");
let pRezultat = document.getElementById("rezultat");
let btnResetuj = document.getElementById("resetuj")

btnRačunaj.addEventListener("click", (e) => {
    e.preventDefault();
    let br1 = Number(inputNumber1.value);
    let br2 = Number(inputNumber2.value);
    let inputOperacija = document.querySelector("input[name='operacija']:checked");
    let rez = 0;
    let operacija = inputOperacija.value;
    let = "";

    if (operacija == "sabiranje"){
        rez = br1+br2;
        o = "+";
    } else if (operacija == "oduzimanje"){
        rez = br1 - br2;
        o = "-";
    } else if (operacija == "množenje"){
        rez = br1 * br2;
        o = "*";
    } else {
        if (br2 == 0){
            alert("Nije dozboljeno deliti nulom");
            br1 = br2 = o = rez = "";
        } else {
            rez = br1/br2;
            o = "/";
        }
    }
    pRezultat.innerHTML = `${br1} ${o} ${br2} = ${rez}`;
});

btnResetuj.addEventListener("click", () => {
    pRezultat.innerHTML =""
});