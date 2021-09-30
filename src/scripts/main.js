import { animate } from 'motion'

let menuExpanded = false
const menuNav = document.querySelector('.menu-nav')

document.querySelector('.menu-icon').addEventListener('click', () => {
  const menuNavHeight = menuNav.getBoundingClientRect().height
  console.log(menuNavHeight)
  if (menuExpanded) {
    animate('.menu', { height: '0' })
  } else {
    animate('.menu', { height: `${menuNavHeight}px` })
  }
  menuExpanded = !menuExpanded
})
