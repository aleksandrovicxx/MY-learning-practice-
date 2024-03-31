const forma = document.getElementById('forma')
const unos = document.getElementById('deoProizvoda')
const unetaCena1 = document.getElementById('cena1')
const unetaCena2 = document.getElementById('cena2')
const dugme = document.getElementById('dugme')
const ispis = document.getElementById('ispis')
const dugmeZaIme = document.getElementById('ime')
const dugmeZaCenu = document.getElementById('dugmecena')
const tabela = document.getElementById('tabela')

function uspostavljanjeVezeSaBazom (resource){
    return new Promise((resolve, reject) =>{
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject ('Desila se greska prilikom povezivanja na server')
            }
        });
        request.open('GET', resource)
        request.send();
    });
}

function sviArtikliKojiSuNaStanju (e) {
    e.preventDefault();
    uspostavljanjeVezeSaBazom('JSON/stock.json')
    .then((data) =>{
        data.forEach(artikal => {
            if(artikal.stock > 0){
                let li = document.createElement('li');
                li.innerHTML = artikal.item
                ispis.appendChild(li)
            }
        }); 
    })
    .catch((msg) =>{
        ispis.innerHTML = msg
    })
}

function artikliKojiSuNaStanjuISadrzeRec (e) {
    e.preventDefault();
    uspostavljanjeVezeSaBazom('JSON/stock.json')
    .then((data) => {
        data.forEach(artikal =>{
            if(unos.value != ''){
                if(artikal.stock > 0 && artikal.item.includes(unos.value)){
                    let li = document.createElement('li');
                    li.innerHTML = artikal.item
                    ispis.appendChild(li)
                }
            }
        });
    });
}

function artikliKojiSuNaStanjuICenaJeIzmedjuDveZadate (e) {
    e.preventDefault()
    let artikliNaStanju = []
    uspostavljanjeVezeSaBazom('JSON/stock.json')
    .then((data) =>{
        data.forEach(artikal =>{
            if(artikal.stock > 0){
                artikliNaStanju.push(artikal.id)
            }
        })
        return uspostavljanjeVezeSaBazom('JSON/prices.json')
    })
    .then (data => {
        data.forEach(artikal =>{
            if(artikliNaStanju.includes(artikal.id) && artikal.price > unetaCena1.value && artikal.price < unetaCena2.value){
                let li = document.createElement('li');
                li.innerHTML = artikal.item
                ispis.appendChild(li)            
            }
        });
    });
}


dugme.addEventListener('click', sviArtikliKojiSuNaStanju)
dugmeZaIme.addEventListener('click', artikliKojiSuNaStanjuISadrzeRec)
dugmeZaCenu.addEventListener('click', artikliKojiSuNaStanjuICenaJeIzmedjuDveZadate)