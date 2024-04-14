export class Osoba {
    constructor(i, p, gr){
        this.ime = i
        this.prezime = p
        this.godinaRodjenja = gr
    }

    set ime(i){
        this._ime = i
    }
    set prezime(p){
        this._prezime = p
    }
    set godinaRodjenja(gr){
        this._godinaRodjenja = gr
    }

    get ime() {
        return this._ime
    }
    get prezime(){
        return this._prezime
    }
    get godinaRodjenja(){
        return this._godinaRodjenja;
    }

    ispisOsobe() {
        console.log(`Ime: ${this.ime}, prezime: ${this.prezime}, godina rodjenja: ${this.godinaRodjenja}`);
    }
}