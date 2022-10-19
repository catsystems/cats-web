import { animate } from 'motion'
import './embla'
import { withoutTrailingSlash } from './utils'

// Color current page link
document.querySelectorAll('.page-link').forEach((el) => {
  if (
    withoutTrailingSlash(new URL(el.href).pathname) ==
    withoutTrailingSlash(new URL(window.location.href).pathname)
  ) {
    el.classList.add('page-link--active')
  }
})

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

// Disable newsletter sign up button on submit
const newsletterForm = document.querySelector('.newsletter-form')
const newsletterButton = document.querySelector('.newsletter-button')
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    newsletterButton.disabled = true
    newsletterButton.textContent = 'Sending...'
  })
}

const fatCat = document.querySelector('.floating-cat--fat')
if (fatCat) {
  fatCat.addEventListener('click', () => {
    alert('Per aspera ad astra')
  })
}

const smolCat = document.querySelector('.floating-cat--small')
if (smolCat) {
  smolCat.addEventListener('click', () => {
    alert('Meow :3')
  })
}
