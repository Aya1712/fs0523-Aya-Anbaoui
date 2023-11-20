// Funzione per generare un numero casuale tra min (incluso) e max (escluso)
function generaNumeroCasuale(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // Funzione per determinare quale giocatore è più vicino al numero casuale
  function determinaVincitore(numeroCasuale: number, numeroGiocatore1: number, numeroGiocatore2: number): string {
    const distanzaGiocatore1: number = Math.abs(numeroCasuale - numeroGiocatore1);
    const distanzaGiocatore2: number = Math.abs(numeroCasuale - numeroGiocatore2);
  
    if (distanzaGiocatore1 === distanzaGiocatore2) {
      return "Entrambi i giocatori sono alla stessa distanza dal numero casuale!";
    } else if (distanzaGiocatore1 < distanzaGiocatore2) {
      return "Il giocatore 1 si è avvicinato di più al numero casuale!";
    } else {
      return "Il giocatore 2 si è avvicinato di più al numero casuale!";
    }
  }
  
  // Dati dei giocatori
  const numeroGiocatore1: number = 5;
  const numeroGiocatore2: number = 10;
  
  // Genera un numero casuale compreso tra 1 e 100
  const numeroCasuale: number = generaNumeroCasuale(1, 101);
  
  // Stampa il numero casuale generato
  console.log("Numero casuale generato =", numeroCasuale);
  
  // Verifica se uno dei giocatori ha azzeccato il numero casuale
  if (numeroGiocatore1 === numeroCasuale || numeroGiocatore2 === numeroCasuale) {
    console.log("Almeno uno dei giocatori ha azzeccato il numero casuale!");
  } else {
    // Nessuno ha azzeccato il numero casuale, determina il vincitore
    const risultato: string = determinaVincitore(numeroCasuale, numeroGiocatore1, numeroGiocatore2);
    console.log("Nessuno dei due ha azzeccato il numero casuale,", risultato);
  }
  