class CapoAbbigliamento {
    constructor(
        public id: number,
        public codprod: number,
        public collezione: string,
        public capo: string,
        public modello: number,
        public quantita: number,
        public colore: string,
        public prezzoivaesclusa: number,
        public prezzoivainclusa: number,
        public disponibile: string,
        public saldo: number
    ) {}

    getsaldocapo(): number {
        return this.saldo;
    }

    getacquistocapo(): number {
        return this.prezzoivainclusa - this.saldo;
    }
}

const capo1 = new CapoAbbigliamento(1, 123, 'Primavera', 'Maglione', 2023, 10, 'Blu', 50, 60, 'S', 5);

console.log("Saldo da sottrarre: ", capo1.getsaldocapo());
console.log("Costo totale del capo: ", capo1.getacquistocapo());





//esercizio non finito


