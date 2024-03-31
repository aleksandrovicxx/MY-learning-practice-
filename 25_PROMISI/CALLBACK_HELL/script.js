let getJSON = (resource, callback) => { 
    // 1. Kreiranje XML objekta
    const request = new XMLHttpRequest(); // nova instanca klase

    request.addEventListener("readystatechange", function() {
        if( request.readyState == 4 && request.status == 200){
            //sve OK
            let data = JSON.parse(request.responseText)
            callback(data, undefined);
        } else if ( request.readyState == 4 ){
            // Nešto nije OK
            callback(undefined, `Desila se greška`);
        }
    });

    // 2.Otvaramo kreirani zahtev
    request.open("GET", resource);

    // 3. Slanje zahteva
    request.send();
}

getJSON("../JSON/prvi.json", (data, err) => {
    if(data){
        console.log(data); // Sve je proslo ok u prvi.json i vraca podatke (data) iz prvi.json
        // Ako je sve bilo ok sa prvim fajhlom onda uzmi drugi fajl drugi.json
        getJSON("../JSON/drugi.json", (data, err) => {
            if(data){
                console.log(data); // Sve je proslo ok u drugi.json i vraca podatke (data) iz drugi.json
                getJSON("../JSON/treci.json", (data, err) =>{
                    if(data){
                        console.log(data); // Sve je proslo ok u treci.json i vraca podatke (data) iz treci.json
                    } else {
                        console.log(err);// Ispisuje grešku iz treci.json
                    }
                })
            } else {
                console.log(err); // Ispisuje grešku iz drugi.json
            }
        });
    } else {
        console.log(err); // Ispisuje grešku iz prvi.json
    }
});


console.log(`KRAJ FAJLA`);