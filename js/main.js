function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector('input[name="amount-input"]');
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}
function showSumPrice(price = 1000, amountNumber = 1) {
    // amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 darabot vásárolhat");
    } else if (amountNumber < 1) {
        alert("Minimum 1db terméket kell vásárolni");
    } else {
        let amount = amountNumber * price;

        showAmount.innerHTML = amount; // showAmount változóval kiválasztott HTML elem (ami egy <span> volt class="show-amount") tartalma átíródik az amount változó értékére.
    }
}


/* parseInt("100px"); // Eredmény: 100
parseInt("0xFF");  // Eredmény: 255 (hexadecimális számként értelmezi)
parseInt("Éva 30"); // Eredmény: NaN (Not a Number, mert nem talál elején számot) */
// Paraméter = változónév a függvény fejlécében
// Argumentum = konkrét, tényleges érték a függvény meghívásánál