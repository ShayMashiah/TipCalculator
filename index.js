let bill;
let numOfPeople;
let tipPercentage;

const onBillChange = (e) => {
  bill = parseInt(e.target.value);
  updateDashboard();
};

const onNumOfPeopleChange = (e) => {
  numOfPeople = parseInt(e.target.value);
  updateDashboard();
};

const onTipChange = (e) => {
  tipPercentage = parseInt(e.target.value);
  updateDashboard();
};

const onSelectTip = (e) => {
  const tipPercentageInput = document.getElementById("tip-percentage-input");
  tipPercentageInput.value = "";
  onTipChange(e);
};

const reset = () => {
    bill = 0;
    numOfPeople = 0;
    tipPercentage = 0;
    updateDashboard();
}

const updateDashboard = () => {
  const tip = bill * (tipPercentage / 100);
  const totalBill = bill + tip;

  const tipPerPerson = tip / numOfPeople;
  const moneyPerPerson = totalBill / numOfPeople;

  const tipButtons = document.getElementsByClassName("btn-percent");

  for (let i = 0; i < tipButtons.length; i++) {
    if (parseInt(tipButtons[i].value) === tipPercentage) {
      tipButtons[i].classList.add("selected");
    } else {
      tipButtons[i].classList.remove("selected");
    }
  }

  const tipPerPersonElement = document.getElementById("tip-amount");
  const moneyPerPersonElement = document.getElementById("total-amount");

  if (!isNaN(tipPerPerson) && !isNaN(moneyPerPerson)) {
    tipPerPersonElement.textContent = `$${tipPerPerson.toFixed(2)}`;
    moneyPerPersonElement.textContent = `$${moneyPerPerson.toFixed(2)}`;
  }
};