function calcTip() {
  let val = document.querySelector('#subtotal')
  let tipPercentage = document.querySelector('#tip')
  let total = document.querySelector('#total')
  let error = document.querySelector('#error')
  let totalSum = 0
  let subtotal = parseFloat(val.value)
  let tip = parseFloat(tipPercentage.value)
  totalSum = subtotal * (1 + tip / 100)
  if (!isNaN(subtotal) && !isNaN(tip)) {
    total.innerHTML = '$' + parseFloat(totalSum).toFixed(2)
    error.innerHTML = ''
    window.open('https://www.w3schools.com/', "W3 Schools", "width=900,height=600,scrollbars=0")
    location.assign("https://www.w3schools.com")
  } else {
    total.innerHTML = '$0.00'
    error.innerHTML = 'Please input correct numeric values in the fields!'
  }
}

calcTip()
