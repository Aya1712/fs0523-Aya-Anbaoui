interface Sim {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
  
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
  }
  
      class Smartphone implements Sim {
      carica: number = 0;
      numeroChiamate: number = 0;
      costoMinuto: number = 0.20;
      registroChiamate: { id: number; durata: number; dataOra: string }[] = [];
  
    ricarica(euro: number): void {
      this.carica += euro;
    }
   
       numero404(): string {
      return `Credito residuo: ${this.carica}€`;
    }
  
    getNumeroChiamate(): number {
      return this.numeroChiamate;
    }
  
    chiamata(min: number): void {
      if (min <= 0) {
        console.log("La durata della chiamata deve essere maggiore di 0 minuti.");
      } else {
        const costoChiamata = min * this.costoMinuto;
        if (costoChiamata > this.carica) {
          console.log("Credito insufficiente per effettuare la chiamata.");
        } else {
          this.carica -= costoChiamata;
          this.numeroChiamate++;
          const id = this.numeroChiamate;
          const dataOra = new Date().toLocaleString();
          this.registroChiamate.push({ id, durata: min, dataOra });
          console.log(`Chiamata effettuata per ${min} minuti. Credito residuo: ${this.carica}€`);
        }
      }
    }
  
    azzeraChiamate(): void {
      this.numeroChiamate = 0;
      console.log("Contatore delle chiamate azzerato.");
    }
  
    mostraRegistroChiamate(): void {
      console.log("Registro chiamate:");
      this.registroChiamate.forEach(chiamata => {
        console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} min, Data/Ora: ${chiamata.dataOra}`);
      });
    }
  
    filtraChiamatePerDataOra(dataOra: string): void {
      const chiamateFiltrate = this.registroChiamate.filter(chiamata => chiamata.dataOra === dataOra);
      if (chiamateFiltrate.length > 0) {
        console.log(`Chiamate effettuate in data/ora ${dataOra}:`);
        chiamateFiltrate.forEach(chiamata => {
          console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} min, Data/Ora: ${chiamata.dataOra}`);
        });
      } else {
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
  