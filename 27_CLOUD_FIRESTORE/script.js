console.log(db);

let users = db.collection('users')
console.log(users);

let d1 = users.doc('maleksandrovic');
console.log(d1);
let d2 = db.doc('users/maleksandrovic')
console.log(d2);

/*
CRUD - Create, Read, Update, Delete
Za pristup dpkumentu: 
let doc = db.collection ('...').doc('...')
Kod dokumenta imamo sledece metode:
- doc.set(...)    -> Create
- doc.get(...)    -> Read
- doc.update(...) -> Update
- doc.delete(...) -> Delete
Sve cetiri metode kao rezultat vracaju PROMISE
Nakon ovih poziva lancaju se .then i .catch
*/

// 1. Create (set)
let cust1 = {
    name: 'Mika',
    age: 38,
    addresess: ['Beograd', 'Ustanicka'],
    salary: 460.00
}; // JS objekat, na osnovu njega kreiramo dokument u bazi

db.collection('customers').doc('cust1')
.set(cust1)
.then(() =>{
    document.body.innerHTML += 'Korisnik dodat u bazu'
})
.catch(e =>{
    document.body.innerHTML += `Greska ${e}`
})

db.collection('customers').doc()
.set({
    name: 'Zika',
    age: 22,
    addresses: 'Nis',
    salary: 600
})
.then(() =>{
    document.body.innerHTML += 'Korisnik dodat u bazu'
})
.catch(e =>{
    document.body.innerHTML += `Greska ${e}`
})