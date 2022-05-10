let addExpenseButton = document.querySelector(".addExpense");
addExpenseButton.addEventListener("click", listExpenseaOnTable);

function listExpenseaOnTable (event) {
    const datePurchaseMade = document.getElementById("date");
    console.log(datePurchaseMade.value);
    const whatWasBought = document.getElementById("things");
    console.log(whatWasBought.value);
    const forHowMuch = document.getElementById("price");
    console.log(forHowMuch.value);
    const howWasItPaid = document.getElementsByClassName("options");
    console.log(howWasItPaid.waysToPay.value);
}