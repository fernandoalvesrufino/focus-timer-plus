import {
  buttonPlay, 
  buttonPause, 
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFireplace,
} from './elements.js'

export default function Events({
  controls,
  timer,
  sound
}) {

  function removeSelection() {
    buttonSoundForest.classList.remove('select')
    buttonSoundRain.classList.remove('select')
    buttonSoundCoffee.classList.remove('select')
    buttonSoundFireplace.classList.remove('select')
    
  }
  
  function addSelection(card) {
    removeSelection()
    
    card.classList.add('select')
  }

  buttonPlay.addEventListener('click', () => {
    controls.play()  
    timer.countDown()  
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', () => {
    controls.reset()   
    timer.reset()
    sound.pressButton()
  })
  
  buttonPlus.addEventListener('click', () => {
    let newMinutes = controls.sumMinutes()
    
    sound.pressButton()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  
  buttonMinus.addEventListener('click', () => {
    let newMinutes = controls.subtractMinutes()
    
    sound.pressButton()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })


  buttonSoundForest.addEventListener('click', () => {
    sound.resetSounds()
    if (!buttonSoundForest.classList.contains('select')) {
      addSelection(buttonSoundForest)
      sound.forestAudio.play()
      return
    }
    removeSelection()
  })
  
  buttonSoundRain.addEventListener('click', () => {
    sound.resetSounds()
    if (!buttonSoundRain.classList.contains('select')) {
      addSelection(buttonSoundRain)
      sound.rainAudio.play()
      return
    }
    removeSelection()
  })
  
  buttonSoundCoffee.addEventListener('click', () => {
    sound.resetSounds()
    if (!buttonSoundCoffee.classList.contains('select')) {
      addSelection(buttonSoundCoffee)
      sound.coffeeAudio.play()
      return
    }
    removeSelection()
  })
  
  buttonSoundFireplace.addEventListener('click', () => {
    sound.resetSounds()
    if (!buttonSoundFireplace.classList.contains('select')) {
      addSelection(buttonSoundFireplace)
      sound.fireplaceAudio.play()
      return
    }
    removeSelection()
  })
}
