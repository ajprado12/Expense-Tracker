let addExpenseButton = document.querySelector(".addExpense");
addExpenseButton.addEventListener("click", listExpenseaOnTable);
addExpenseButton.style.backgroundColor = "navy";
addExpenseButton.style.color = "white";
var datePurchaseMade = document.getElementById("date");
var whatWasBought = document.getElementById("things");
var forHowMuch = document.getElementById("price");
var howWasItPaid = document.getElementsByClassName("options");
var whereItWasBought = document.getElementById("location");

function listExpenseaOnTable(event) {
  const entry = document.getElementById("myTable");
  const createEntry = createMyEntry();
  entry.append(createEntry);
  datePurchaseMade.value = "";
  whatWasBought.value = "";
  forHowMuch.value = "";
  howWasItPaid.waysToPay.value = "";
  whereItWasBought.value = "";
}
function createMyEntry(text) {
  const table = document.getElementById("inputTable");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.color = "white";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.boxShadow = "2px 5px black";
  deleteButton.addEventListener("click", function () {
    row.remove();
  });
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = datePurchaseMade.value;
  cell2.innerHTML = whatWasBought.value;
  cell3.innerHTML = "@ " + whereItWasBought.value;
  cell4.innerHTML = "$ " + forHowMuch.value;
  cell5.innerHTML = howWasItPaid.waysToPay.value;
  row.appendChild(deleteButton);
  return table;
}
