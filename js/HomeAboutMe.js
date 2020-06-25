// Code from Rob Anderson. Greatest man alive. www.R0b.io <3

// Things for the strapline
let randomThings = [
  'researcher 🔎,',
  'designer ✏️,',
  'photographer 📸,',
  'VR/AR Designer 🌍,',
  'film buff 🎬,',

]

let contactThings = [
  'VR experiences?',
  'collaborations?',
  'new projects?',



]

//
// Animate text of an element between two values
//
function animateText(elem, toText, duration) {
  let start = Date.now()
  let stages = []

  for (let i = 0; i < elem.textContent.length; i++) {
    stages.push(elem.textContent.slice(0, -i - 1))
  }

  for (let i = 0; i < toText.length; i++) {
    stages.push(toText.slice(0, i + 1))
  }

  elem.classList.add('has-text-animation')

  let tick = () => {
    let currentDuration = Date.now() - start
    let index = Math.floor(
      Math.min(1, currentDuration / duration) * (stages.length - 1)
    )

    elem.innerHTML = stages[index] || '&nbsp'

    if (index < stages.length - 1) window.requestAnimationFrame(tick)
    else elem.classList.remove('has-text-animation')
  }

  window.requestAnimationFrame(tick)
}


window.setInterval(() => {
  let elem = document.querySelector('.strapline .skill')
  if (!elem) return

  let toPickFrom = randomThings.filter(skill => skill !== elem.textContent)

  animateText(
    elem,
    toPickFrom[Math.floor(Math.random() * toPickFrom.length)],
    2500
  )
}, 5000)

window.setInterval(() => {
  let elem = document.querySelector('.straplineContact .skillContact')
  if (!elem) return

  let toPickFrom = contactThings.filter(skill => skill !== elem.textContent)

  animateText(
    elem,
    toPickFrom[Math.floor(Math.random() * toPickFrom.length)],
    2500
  )
}, 5000)
