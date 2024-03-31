const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity')
const div = document.querySelector('#result')

/*
1) Odrediti artikle koji vise nisu na stanju
2) Odrediti ukupnu tezinu svih tih artikala
3) Ako je ta tezina manja od capaciteta kamiona, omda:
    3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
    3.2) Inace ispisati poruku da kamion nema trazeni kapacitet
*/

function getItems (resource, resolve, reject){
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200){
            // Sve ok, obradi zahtev
            let data = JSON.parse(request.responseText);
            resolve(data); // funkcjia radi nesto sa podacima koji su stigli sa servera

        } else if (request.readyState === 4){
            // Desila se neka greska
            reject('Desila se greska');
        }
    });
    request.open("GET", resource);
    request.send();
}

function submitFormvarijanta1 (event) {
    event.preventDefault()  
    // 1) Odrediti artikle koji vise nisu na stanju
    let nizArtikala = [];
    getItems("JSON/stock.json", (data) => {
        data.forEach(artikal => {
            if(artikal.stock == 0){
                nizArtikala.push(artikal.id);
            };
        });
    // 2) Odrediti ukupnu tezinu svih tih artikala
        getItems("JSON/weights.json", (data) =>{
            let totalWeight = 0;
            data.forEach(artikal =>{
                if(nizArtikala.includes(artikal.id)) {
                    totalWeight += artikal.weight;
                };
            });
            // 3) Ako je ta tezina manja od capaciteta kamiona, omda:
            if(totalWeight <= Number(capacity.value)){
                //     3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
                getItems("JSON/prices.json", (data) =>{
                    let totalPrice = 0
                    data.forEach(artikal => {
                        if(nizArtikala.includes(artikal.id)){
                            totalPrice += artikal.price;
                        }
                    });
                    div.innerHTML = `Total prices of articles: ${totalPrice}`
                }, (msg) =>{
                    div.innerHTML = msg
                })
            } else {
                //     3.2) Inace ispisati poruku da kamion nema trazeni kapacitet*/
                div.innerHTML = `Not enough capacity in truck`
            }
        }, (msg) =>{
            div.innerHTML = msg;
        });
        console.log(nizArtikala);
    }, (msg) =>{
        div.innerHTML = msg;
    });
}
/*
Funkcija submitFormaVarijanta1 je apsolutno tacna
PROBLEM: nepreglednost, tesko za odrzavanje (callback hell)
Callback hell moze da se ublazi Promisima
*/
form.addEventListener('submit', submitFormvarijanta1)