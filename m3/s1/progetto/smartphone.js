"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: ${this.carica}€`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        if (min <= 0) {
            console.log("La durata della chiamata deve essere maggiore di 0 minuti.");
        }
        else {
            const costoChiamata = min * this.costoMinuto;
            if (costoChiamata > this.carica) {
                console.log("Credito insufficiente per effettuare la chiamata.");
            }
            else {
                this.carica -= costoChiamata;
                this.numeroChiamate++;
                const id = this.numeroChiamate;
                const dataOra = new Date().toLocaleString();
                this.registroChiamate.push({ id, durata: min, dataOra });
                console.log(`Chiamata effettuata per ${min} minuti. Credito residuo: ${this.carica}€`);
            }
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log("Contatore delle chiamate azzerato.");
    }
    mostraRegistroChiamate() {
        console.log("Registro chiamate:");
        this.registroChiamate.forEach(chiamata => {
            console.log(`Id: ${chiamata.id}, durata: ${chiamata.durata} min, data/ora: ${chiamata.dataOra}`);
        });
    }
    filtraChiamatePerDataOra(dataOra) {
        const chiamateFiltrate = this.registroChiamate.filter(chiamata => chiamata.dataOra === dataOra);
        if (chiamateFiltrate.length > 0) {
            console.log(`Chiamate effettuate in data/ora ${dataOra}:`);
            chiamateFiltrate.forEach(chiamata => {
                console.log(`Id: ${chiamata.id}, durata: ${chiamata.durata} min, data/ora: ${chiamata.dataOra}`);
            });
        }
        else {
            console.log(`Nessuna chiamata effettuata in data/ora ${dataOra}.`);
        }
    }
}
const smartphone1 = new Smartphone();
const smartphone2 = new Smartphone();
const smartphone3 = new Smartphone();
smartphone1.ricarica(20);
smartphone2.ricarica(30);
smartphone3.ricarica(25);
console.log(smartphone1.numero404());
console.log(smartphone2.numero404());
console.log(smartphone3.numero404());
smartphone1.chiamata(5);
smartphone2.chiamata(8);
smartphone3.chiamata(10);
console.log(smartphone1.numero404());
console.log(smartphone2.numero404());
console.log(smartphone3.numero404());
console.log(smartphone1.getNumeroChiamate());
console.log(smartphone2.getNumeroChiamate());
console.log(smartphone3.getNumeroChiamate());
smartphone1.mostraRegistroChiamate();
smartphone2.filtraChiamatePerDataOra(new Date().toLocaleString());
