class Sportista {
    constructor (i, p, gr, gradr){
        this.ime = i
        this.prezime = p
        this.godinaRodjenja = gr
        this.gradRodjenja = gradr
    }

    set ime (i){
        this._ime = i
    }
    set prezime (p){
        this._prezime = p
    }
    set godinaRodjenja (gr){
        this._godinaRodjenja = gr
    }
    set gradRodjenja (gradr){
        this._gradRodjenja = gradr
    }

    get ime(){
        return this._ime
    }
    get prezime(){
        return this._prezime
    }
    get godinaRodjenja(){
        return this._godinaRodjenja
    }
    get gradRodjenja(){
        return this._gradRodjenja
    }
}

export default Sportista