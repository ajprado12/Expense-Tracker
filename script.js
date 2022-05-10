let addExpenseButton = document.querySelector(".addExpense");
addExpenseButton.addEventListener("click", listExpenseaOnTable);
addExpenseButton.style.backgroundColor ="navy";
addExpenseButton.style.color ="white";
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
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.color = "white";
  deleteButton.style.backgroundColor = "red";
  deleteButton.addEventListener("click", function () {
    expenses.remove();
  });
  expenses.append(datePurchaseMade.value, whatWasBought.value,(" @" +  whereItWasBought.value), (" $" + forHowMuch.value), howWasItPaid.waysToPay.value, deleteButton);
  return expenses;
}
