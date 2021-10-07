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
