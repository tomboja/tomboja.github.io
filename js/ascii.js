(function() {
  window.onload = () => {
    const animations = document.querySelector('#animations')
    const size = document.querySelector('#size')
    const speed = document.getElementById('speed')
    const startButton = document.querySelector('#startButton')
    const stopButton = document.querySelector("#stopButton")
    stopButton.disabled = true
    let animationType = ''
    let animationSize = ''
    let animationSpeed = 250

    function handleStartButtonControls () {
      startButton.disabled = true
      animations.disabled = true
      stopButton.disabled = false
    }

    function handleStopButtonControls() {
      startButton.disabled = false
      animations.disabled = false
      stopButton.disabled = true
    }
    animations.addEventListener('change', (event) => {
      animationType = event.target.value
    })
    size.addEventListener('change', (event) => {
      animationSize = event.target.value
    })
    speed.addEventListener('change', (event) => {
      animationSpeed = speed.checked ? 50 : 250
    })
    startButton.onclick = () => {
      handleStartButtonControls()
      const textArea = document.querySelector('.mytextarea')
      textArea.style.fontSize = animationSize
      const animes = ANIMATIONS[animationType].split('=====')
      for(let i = 0; i < animes.length; i++) {
        setInterval(() => {
          textArea.value = animes[i]
          if (i === animes.length - 1) {
            textArea.value = animes[i]
            i = 0
          }
        }, animationSpeed)
      }
    }

    stopButton.onclick = () => {
      handleStopButtonControls()
    }
  }
}())
