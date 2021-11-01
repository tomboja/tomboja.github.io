window.onload = function () {
  document.getElementById('bigButton').onclick = delay500
  document.querySelector('#bling').onclick = blingOnChange
}

const delay500 = function () {
  setInterval(alertFunc, 500);
}

const alertFunc = function () {
  const textArea = document.querySelector('#mytxt')
  // textArea.style.fontSize = '24pt'

  const style = window.getComputedStyle(textArea, null).getPropertyValue('font-size')
  const size = parseInt(style)
  const val = (size + 2) + 'pt'
  textArea.style.fontSize = val
}

const blingOnChange = function () {
  const textArea = document.querySelector('#mytxt')
  // const fontSize = textArea.getAttribute('style')

  if (document.querySelector('#bling').checked) {
    textArea.style.fontWeight = 'bold'
    textArea.style.color = 'green'
    textArea.style.textDecoration = 'underline'
    document.querySelector('body').style.backgroundImage = "url('./img/dollar.png')"
  } else {
    textArea.style.fontWeight = 'normal'
    textArea.style.color = 'black'
    textArea.style.textDecoration = 'none'
    document.querySelector('body').style.backgroundImage = ""
  }

}