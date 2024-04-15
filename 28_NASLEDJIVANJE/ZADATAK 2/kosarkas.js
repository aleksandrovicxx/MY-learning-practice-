import Sportista from "./sportisti.js";

class Kosarkas extends Sportista{
    constructor(i, p, gr, gradr, pts){
        super(i, p, gr, gradr)
        this.poeni = pts
    }
    set poeni(pts){
        this._poeni = pts
    }
    get poeni() {
        return this._poeni
    }
}

export default Kosarkas