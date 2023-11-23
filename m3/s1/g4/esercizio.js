"use strict";
class CapoAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        return this.saldo;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.saldo;
    }
}
const capo1 = new CapoAbbigliamento(1, 123, 'Primavera', 'Maglione', 2023, 10, 'Blu', 50, 60, 'S', 5);
console.log("Saldo da sottrarre: ", capo1.getsaldocapo());
console.log("Costo totale del capo: ", capo1.getacquistocapo());
//esercizio non finito
