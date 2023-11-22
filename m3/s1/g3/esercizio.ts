abstract class LavoratoreAutonomo {
    protected codredd: number;
    protected redditoannuolordo: number;
    protected tasseinps: number;
    protected tasseirpef: number;

    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }

    abstract getUtilitaTasse(): number;

    getTasseInps(): number {
        return this.tasseinps;
    }

    getTasseIrpef(): number {
        return this.tasseirpef;
    }
}

class LavoratoreAutonomoConcreto extends LavoratoreAutonomo {
    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }

   
    getUtilitaTasse(): number {

        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    }
}

const lavoratore = new LavoratoreAutonomoConcreto(1, 50000, 5000, 10000);



console.log("Tasse INPS: " + lavoratore.getTasseInps());
console.log("Tasse IRPEF: " + lavoratore.getTasseIrpef());
console.log("Utilità delle tasse: " + lavoratore.getUtilitaTasse());
