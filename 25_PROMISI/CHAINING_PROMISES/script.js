let getJSON = resource => { 
 
    const request = new XMLHttpRequest(); // 1. Kreiranje XML objekta
    request.open("GET", resource); // 2.Otvaramo kreirani zahtev
    request.send(); // 3. Slanje zahteva

    return new Promise((resolve, rejact) => {
        request.addEventListener("readystatechange", function() {
            if( request.readyState == 4 && request.status == 200){
                //sve OK
                let data = JSON.parse(request.responseText)
                resolve(data);
            } else if ( request.readyState == 4 ){
                // Nešto nije OK
                rejact("Došlo je do greške")
            }
        });
    });
}
getJSON("../JSON/prvi.json").then( sadrzaj => {
    console.log("prvi.json", sadrzaj);
    return getJSON("../JSON/drugi.json") // Ovo vraća instancu Promise, koja može imati .then i .catch
}).then(sadrzaj2 => {
    console.log("drugi.json", sadrzaj2); // Ako je drugi.json resolved onda ispiuje njegove podatke
    return getJSON("../JSON/treci.json")
}).then(sadrzaj3 => {
    console.log("treci.json", sadrzaj3); // Ako je terci.json resolved ispisuje njegove podatke
}).catch( greska => {
    console.log("Rejected:", greska); // Ako je ma jedan fajl bio rejacted, upada u catch granu
});
console.log(`KRAJ FAJLA`);


const request = new XMLHttpRequest(); 
return new Promise((resolve, rejact) => {
    request.addEventListener("readystatechange", function() {
        if( request.readyState == 4 && request.status == 200){
            //sve OK
            let data = JSON.parse(request.responseText)
            resolve(data);
        } else if ( request.readyState == 4 ){
            // Nešto nije OK
            rejact("Došlo je do greške")
        }
    });
    request.open("GET", 'https://jsonplaceholder.typicode.com/users'); 
    request.send();
});