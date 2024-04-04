// Pamcenje/Upisivanje/Smeštanje u lokalnoj memoriji
localStorage.setItem("ime", "Stefan");
localStorage.setItem("grad", "Niš")

// Izmena/Update u lokalnoj memoriji
localStorage.setItem("grad", "Leskovac")
// Ukoliko postoji neki key u LS onda vrsi update
// Ukoliko ne postoji, onda vrši upis(novi unos)

//Preuzimanje iz lokalne memorije
let unetoIme = localStorage.getItem("ime")
console.log(unetoIme);
console.log(localStorage.getItem("grad"));

console.log(localStorage.getItem("godine"));// Vraca null jer kljuc "godine" ne postoji
localStorage.removeItem("grad") // Brise iz memorije po zadatom kljucu
