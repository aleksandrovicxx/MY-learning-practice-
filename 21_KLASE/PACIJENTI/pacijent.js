class Pacijent {
    constructor(i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    //seteri
    set ime(i){
        this._ime = i
    }
    set visina(v){
        if(v > 0 && v < 250){
            this._visina = v;
        } else {
            console.log(`Visina nije izmedju 0 i 250`);
        }
    }
    set tezina(t){
        if(t > 0 && t < 550){
            this._tezina = t
        } else {
            console.log(`Tezina nije izmedju 0 i 550`);
        }
    }
    // geteri
    get ime() {
        return this._ime
    }
    get visina () {
        return this._visina
    }
    get tezina (){
        return this._tezina
    }

    Stampaj() {
        console.log(`Ime pacijenta: ${this.ime}, visina pacijenta: ${this.visina}, tezina pacijenta: : ${this.tezina} `);
    }

    Bmi(){
        return this.tezina/((this.visina/100)**2)
    }
    
    Kritical () {
        let kritical = false;
        let bmi = this.Bmi()
        if(bmi < 15 || bmi > 40){
            kritical = true
        }
        return true
    }
}

export default Pacijent
