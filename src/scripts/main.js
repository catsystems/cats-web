import { animate } from 'motion'

let menuExpanded = false
const menuNav = document.querySelector('.menu-nav')

// mobile menu
document.querySelector('.menu-icon').addEventListener('click', () => {
  const menuNavHeight = menuNav.getBoundingClientRect().height
  if (menuExpanded) {
    animate('.menu', { height: '0' })
  } else {
    animate('.menu', { height: `${menuNavHeight}px` })
  }
  menuExpanded = !menuExpanded
})

document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault()
})

document.querySelector('.newsletter-button').addEventListener('click', (e) => {
  e.preventDefault()
  alert('Not implemented, yet.')
})
