const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity')
const div = document.querySelector('#result')
const table = document.querySelector('#table')

function getItemsReturnPromise (resource){
    return new Promise((resolve, reject) =>{
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function() {
            if(request.readyState === 4 && request.status === 200){
                // Sve ok, obradi zahtev
                let data = JSON.parse(request.responseText);
                resolve(data); // funkcjia radi nesto sa podacima koji su stigli sa servera
            } else if (request.readyState === 4){
                // Desila se neka greska
                reject('Desila se greska');
            };
        });
        request.open('GET', resource);
        request.send();
    });
}

function submitFormvarijanta2 (event) {
    event.preventDefault();
    let nizArtikala = []
    getItemsReturnPromise("JSON/stock.json")
    .then(data => {
        data.forEach(artikal => {
            if(artikal.stock == 0){
                nizArtikala.push(artikal.id)
            }
        });
        return getItemsReturnPromise("JSON/weights.json")
    })
    .then (data =>{
        let totalWeight = 0;
        data.forEach(artikal =>{
            if(nizArtikala.includes(artikal.id)){
                totalWeight += artikal.weight;
            }
        });
        if(totalWeight <= capacity.value){
            return getItemsReturnPromise("JSON/prices.json")
        } else {
            div.innerHTML = `Not enough capacity in truck`
        }
    })
    .then(data => {
        if(data != undefined){
            let totalPrice = 0;
            let imenaArtiklaZaNabavku = []
            let ceneArtiklaZaNabavku = []
            data.forEach(artikal =>{
                if(nizArtikala.includes(artikal.id)){
                    totalPrice += artikal.price;
                    imenaArtiklaZaNabavku.push(artikal.item)
                    ceneArtiklaZaNabavku.push(artikal.price)
                }
            });
            for ( let i = 0; i < imenaArtiklaZaNabavku.length; i++) {
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                td.style.border = '1px solid black'
                tr.appendChild(td)
                td.innerHTML = imenaArtiklaZaNabavku[i]
                let td2 = document.createElement('td')
                td2.style.border = '1px solid black'
                tr.appendChild(td2)
                td2.innerHTML = ceneArtiklaZaNabavku[i]
                table.appendChild(tr)
            }
            console.log(`da`);
            let ukupno = document.createElement('tr')
            let tdUkupnotekst = document.createElement('td')
            tdUkupnotekst.style.border = '1px solid black'
            tdUkupnotekst.innerHTML = `UKUPNO`
            ukupno.appendChild(tdUkupnotekst)
            let tdUkupnoCena = document.createElement('td')
            tdUkupnoCena.innerHTML = Math.floor(totalPrice);
            tdUkupnoCena.style.border = '1px solid black'
            ukupno.appendChild(tdUkupnoCena)
            table.appendChild(ukupno)
        }
    })
    .catch(msg =>{
        div.innerHTML = msg
    });    
}
form.addEventListener("submit", submitFormvarijanta2)