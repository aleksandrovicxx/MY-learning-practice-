const forma = document.getElementById('forma')
const unos = document.getElementById('deoProizvoda')
const unetaCena1 = document.getElementById('cena1')
const unetaCena2 = document.getElementById('cena2')
const dugme = document.getElementById('dugme')
const ispis = document.getElementById('ispis')
const dugmeZaIme = document.getElementById('ime')
const dugmeZaCenu = document.getElementById('dugmecena')
const tabela = document.getElementById('tabela')

function uspostavljanjeVezeSaBazom (resource, resolve, reject) {
    let request = new XMLHttpRequest()
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText)
            resolve(data)
        } else if(request.readyState === 4) {
            reject (`Desila se greska`)
        }
    });
    request.open('GET', resource)
    request.send()
}

function sviProizvodiKojiSuNaStanju (e){
    e.preventDefault()
    uspostavljanjeVezeSaBazom('JSON/stock.json', (data) =>{
        data.forEach((artikal, i) => {
            if(artikal.stock > 0){
                let li = document.createElement('li')
                li.innerHTML = artikal.item;
                ispis.appendChild(li)
            }
        })
    }, (msg) => {
        ispis.innerHTML = msg;
    })
}
function proizvodiKojiSadrzeRec (e) {
    e.preventDefault()
    uspostavljanjeVezeSaBazom('JSON/stock.json', (data) =>{
        data.forEach(artikal =>{
            if(artikal.item.includes(unos.value) && artikal.stock > 0 ){
                let li = document.createElement('li')
                li.innerHTML = artikal.item;
                ispis.appendChild(li)
            }
        })
    }, (msg) =>{
        ispis.innerHTML = msg
    })
}

function prozvodIzmedjuZadateCene (e) {
    e.preventDefault()
    let nizArtikalaKojiSuNaStanju = []
    uspostavljanjeVezeSaBazom('JSON/stock.json', (data) => {
        data.forEach(artikal =>{
            if(artikal.stock > 0){
                nizArtikalaKojiSuNaStanju.push(artikal.id)
            }
        });
        uspostavljanjeVezeSaBazom('JSON/prices.json', (data) =>{
            data.forEach(artikal =>{
                if(nizArtikalaKojiSuNaStanju.includes(artikal.id) && (artikal.price > unetaCena1.value) && (artikal.price < unetaCena2.value)){ 
                let li = document.createElement('li')
                li.innerHTML = artikal.item;
                ispis.appendChild(li)
                }
            })
        }, (msg) =>{
            ispis.innerHTML = msg;
        })
    }, (msg) => {
        ispis.innerHTML = msg;
    })
}

dugme.addEventListener('click', sviProizvodiKojiSuNaStanju)
dugmeZaIme.addEventListener('click', proizvodiKojiSadrzeRec)
dugmeZaCenu.addEventListener('click', prozvodIzmedjuZadateCene)