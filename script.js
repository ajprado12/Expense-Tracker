let addExpenseButton = document.querySelector(".addExpense");
addExpenseButton.addEventListener("click", listExpenseaOnTable);
var datePurchaseMade = document.getElementById("date");
var whatWasBought = document.getElementById("things");
var forHowMuch = document.getElementById("price");
var howWasItPaid = document.getElementsByClassName("options");
var whereItWasBought= document.getElementById("location");

function listExpenseaOnTable(event) {
  const entry = document.getElementById("myExpenses");
  const createEntry = createMyEntry();
  entry.append(createEntry);
  datePurchaseMade.value = "";
  whatWasBought.value = "";
  forHowMuch.value = "";
  howWasItPaid.waysToPay.value = "";
  whereItWasBought.value = "";
}
function createMyEntry(text) {
  const expenses = document.createElement("li");
  expenses.append(datePurchaseMade.value, whatWasBought.value,("@ " +  whereItWasBought.value), ("$ " + forHowMuch.value), howWasItPaid.waysToPay.value);
  return expenses;
}
