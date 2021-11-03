(function() {
  window.onload = () => {
    timer = null
    let buttonElement = document.querySelector('#clickMe')

    function rudy() {
      document.getElementById("output").innerHTML += "Rudy!"
    }

    function delayMessage2() {
      if (timer === null) {
        setInterval(rudy, 1000)
      } else {
        clearInterval(timer)
        timer = null
      }
    }
    buttonElement.onclick = delayMessage2
  }
})()
