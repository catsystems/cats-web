import { animate } from 'motion'

// Toggle mobile menu on button click
let menuExpanded = false
const menuNav = document.querySelector('.menu-nav')
const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', () => {
  const menuNavHeight = menuNav.getBoundingClientRect().height
  if (menuExpanded) {
    animate('.menu', { height: '0' })
  } else {
    animate('.menu', { height: `${menuNavHeight}px` })
  }
  menuExpanded = !menuExpanded
})

// Close mobile menu if user clicks outside
const menu = document.querySelector('.menu')
window.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
    animate('.menu', { height: '0' })
    menuExpanded = false
  }
})

// TODO: newsletter stuff
const newsletterForm = document.querySelector('.newsletter-form')
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}

const newsletterButton = document.querySelector('.newsletter-button')
if (newsletterButton) {
  newsletterButton.addEventListener('click', (e) => {
    e.preventDefault()
    alert('Not implemented, yet.')
  })
}
