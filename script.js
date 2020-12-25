const data = {
  USD: { EUR: 0.82, GBP: 0.74, TRY: 7.64 },
  EUR: { USD: 1.23, GBP: 0.91, TRY: 9.36 },
  GBP: { USD: 1.35, EUR: 1.10, TRY: 10.28 },
  TRY: { USD: 0.13, EUR: 0.11, GBP: 0.097 }
};

const currencyKeys = Object.keys(data);

function createCurrencyElements(elements, root, inputName) {
  for (let i = 0; i < elements.length; i++) {
    const currencyKeyDiv = document.createElement("div");
    const currencyKeyInput = document.createElement("input");
    currencyKeyInput.setAttribute("type", "radio");
    currencyKeyInput.setAttribute("name", inputName);
    currencyKeyInput.setAttribute("id", inputName + elements[i]);
    currencyKeyInput.setAttribute("value", elements[i]);

    const currencyKeyLabel = document.createElement("label");
    currencyKeyLabel.setAttribute("for", inputName + elements[i]);
    currencyKeyLabel.textContent = elements[i];

    currencyKeyDiv.appendChild(currencyKeyInput);
    currencyKeyDiv.appendChild(currencyKeyLabel);
    root.appendChild(currencyKeyDiv);
  }
}

//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";
createCurrencyElements(currencyKeys, parentEl, fromInputName);

// to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";
createCurrencyElements(currencyKeys, parentToEl, toInputName);


const calculateButton = document.querySelector("#calculate-button");

calculateButton.addEventListener("click", function () {
  const currencyResult = document.querySelector("#currency-result");
    if (document.querySelector("input[name='currency_to']:checked") === null || document.querySelector("input[name='currency_from']:checked") === null) {
    myFunction( "Please Make A Choice!")
     
  }
  else {
    const amount = document.querySelector("input[name='amount']").value;
    if (document.querySelector("input[name='currency_to']:checked").value === document.querySelector("input[name='currency_from']:checked").value) {
      myFunction("Please Make Different Choices!")
    } else if (isNaN(amount)) {
      myFunction("The Entry Must Be a Number! ");
      
    }
    else {
      const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
      const toTarget = document.querySelector("input[name='currency_to']:checked").value;

      const currentCurrencyObject = data[fromTarget];
      const resultForOne = currentCurrencyObject[toTarget];
      const result = amount * resultForOne;
           currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
           return;
          }

    
  }

})
function myFunction(message) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
  document.querySelector("#snackbar").innerHTML = message;
}


