// console.log("Hello, this is a console, message.")
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");

    let amountNumber = parseInt(amountInput.value);
  
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) {
        alert("Maximum 10 darabot vásárolhat");
    } else if (amountNumber < 1) {
        alert("Minimum 1db terméket kell vásárolni");
    } else {
        let amount = amountNumber * price;
        let showAmount = document.querySelector("span.show-amount");
        showAmount.innerHTML = amount; // showAmount változóval kiválasztott HTML elem (ami egy <span> volt class="show-amount") tartalma átíródik az amount változó értékére.
    }
}
