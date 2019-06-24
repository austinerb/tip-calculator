const inputs = document.querySelectorAll("input");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");

inputs.forEach(function(input) {
  input.addEventListener("change", update);
});

// update()
  // get values from each input
  // calculate totals
  // update displays
function update() {
  let bill = Number(inputs[0].value);
  let tipPercent = Number(inputs[1].value);
  let people = Number(inputs[2].value);

  let tip = bill * (tipPercent / 100.0) / people;
  bill /= people;
  let total = tip + bill;

  tip = (Math.floor(tip * 100) / 100.0).toFixed(2);
  total = (Math.floor(total * 100) / 100.0).toFixed(2);

  tipAmount.innerHTML = tip;
  totalAmount.innerHTML = total;
}
