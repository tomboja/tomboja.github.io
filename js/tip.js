function calcTip() {
  let val1 = document.querySelector('#subtotal')
  let tipPercentage = document.querySelector('#tip')
  let total = document.querySelector('#total')
  let error = document.querySelector('#error')
  let totalSum = 0;
  let subtotal = parseFloat(val1.value);
  let tip = parseFloat(tipPercentage.value);
  totalSum = subtotal * (1 + tip / 100);
  if (!isNaN(subtotal) && !isNaN(tip)) {
    total.innerHTML = '$' + parseFloat(totalSum).toFixed(2)
    error.innerHTML = ''
  } else {
    total.innerHTML = '$0.00'
    error.innerHTML = 'Please input correct numeric values in the fields!'
  }
}