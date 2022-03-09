let km = prompt("Inserire km da percorrere");
let age = prompt("Inserire età del passeggero");

// Controllo se i dati immessi sono numeri
if (!isNaN(km) && !isNaN(age)) {

    // Se l'età è minore di zero o maggiore di 120 do errore
    if (age < 0 || age > 120) {
        alert('Età inserita non corretta')
        document.getElementById('chilometri').innerHTML = null;
        document.getElementById('eta').innerHTML = null;

    } else {

        let priceKm = 0.21;
        let priceTicket;

        // Stampo a video l'età e i km da percorrere
        document.getElementById('chilometri').innerHTML = km + " Km";
        document.getElementById('eta').innerHTML = age + " anni";

        // Condizione se è minorenne
        if (age < 18) {

            // Prezzo ticket con 20% di sconto
            priceKm -= (priceKm * 0.2);
            priceTicket = priceKm * km;
            document.getElementById('prezzo').innerHTML = priceTicket.toFixed(2) + "&#8364;";
        }
        // Condizione se è Over 65
        else if (age >= 65) {

            // Prezzo ticket con 40% di sconto
            priceKm -= (priceKm * 0.4);
            priceTicket = priceKm * km;
            document.getElementById('prezzo').innerHTML = priceTicket.toFixed(2) + "&#8364;";
        }
        // In tutti gli altri casi
        else {
            priceTicket = priceKm * km;
            document.getElementById('prezzo').innerHTML = priceTicket.toFixed(2) + "&#8364;";
        }
    }

} else {
    alert('Non sono stati inseriti numeri')
}