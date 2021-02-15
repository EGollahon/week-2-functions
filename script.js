var wrapperEle = document.querySelector(".wrapper");
var recalculateEle = document.querySelector(".recalculate");

function prompts() {
  var milesPerYear = Number(
    prompt("How many miles a year do you drive on average?")
  );
  var gallonCost = Number(
    prompt("What is the current cost per gallon of gas in your area?")
  );
  calculations(milesPerYear, gallonCost, 29);
  calculations(milesPerYear, gallonCost, 26);
  calculations(milesPerYear, gallonCost, 17);
  calculations(milesPerYear, gallonCost, 12);
}

function calculations(milesPerYear, gallonCost, MPGRating) {
  var totalCost = ((milesPerYear / MPGRating) * gallonCost).toFixed(2);
  var newText = document.createElement("p");
  newText.innerHTML = `To drive a car with a MPG rating of ${MPGRating} for ${milesPerYear} miles at $${gallonCost} per gallon it would cost $${totalCost}.`;
  wrapperEle.insertBefore(newText, wrapperEle.childNodes[0]);
}

prompts();
recalculateEle.addEventListener("click", function () {
  wrapperEle.childNodes[3].remove()
  wrapperEle.childNodes[2].remove()
  wrapperEle.childNodes[1].remove()
  wrapperEle.childNodes[0].remove()
  prompts();
});