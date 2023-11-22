"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getTasseInps() {
        return this.tasseinps;
    }
    getTasseIrpef() {
        return this.tasseirpef;
    }
}
class LavoratoreAutonomoConcreto extends LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
    getUtilitaTasse() {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    }
}
const lavoratore = new LavoratoreAutonomoConcreto(1, 50000, 5000, 10000);
console.log("Tasse INPS: " + lavoratore.getTasseInps());
console.log("Tasse IRPEF: " + lavoratore.getTasseIrpef());
console.log("Utilità delle tasse: " + lavoratore.getUtilitaTasse());
