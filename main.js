let km = prompt("Inserire km da percorrere");
let age = prompt("Inserire età del passeggero");

// Controllo se i dati immessi sono numeri
if (!isNaN(km) && !isNaN(age)) {

    // Se l'età è minore di zero o maggiore di 120 do errore
    if ( Math.sign(age) == 1 && age < 120 ) {

        let priceKm = 0.21;
        let priceTicket;

        // Condizione se è minorenne
        if (age < 18) {
            // Prezzo ticket con 20% di sconto
            priceKm -= (priceKm * 0.2);
            priceTicket = priceKm * km;
        }
        // Condizione se è Over 65
        else if (age >= 65) {

            // Prezzo ticket con 40% di sconto
            priceKm -= (priceKm * 0.4);
            priceTicket = priceKm * km;
        }
        // In tutti gli altri casi
        else {
            priceTicket = priceKm * km;
        }

        // Stampo a video l'età, i km e il prezzo del ticket
        document.getElementById('chilometri').innerHTML = km + " Km";
        document.getElementById('eta').innerHTML = age + " anni";
        document.getElementById('prezzo').innerHTML = priceTicket.toFixed(2) + "&#8364;";
    } 
    else{
        alert('Età inserita non corretta')
    }

} 
else {
    alert('Non sono stati inseriti numeri')
}

