import {Vozilo} from "./Klase/vozilo.js";
import {Automobil} from "./Klase/automobil.js";
import { Kamion } from "./Klase/kamion.js";

let v1 = new Vozilo("vazdusno", "bela");
v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil ("drumsko", "teget", "VR 160-NN");
a1.ispisiVozilo();
a1.ispisiAutomobil();

// v1.ispisiAutomobil(); // Ovo javlja gresku jer roditelj ne moze da pristupi poljima i metodama deteta

let k1 = new Kamion ('drumsko', 'siva', 70);
k1.voziKamion();
