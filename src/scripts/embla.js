import EmblaCarousel from 'embla-carousel'

const container = document.querySelector('.embla')
if (container) {
  const viewPort = container.querySelector('.embla-viewport')
  const prevBtn = container.querySelector('.embla-button--prev')
  const nextBtn = container.querySelector('.embla-button--next')
  const embla = EmblaCarousel(viewPort, { loop: false, skipSnaps: false })

  const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla)

  setupPrevNextBtns(prevBtn, nextBtn, embla)

  embla.on('select', disablePrevAndNextBtns)
  embla.on('init', disablePrevAndNextBtns)
}

function setupPrevNextBtns(prevBtn, nextBtn, embla) {
  prevBtn.addEventListener('click', embla.scrollPrev, false)
  nextBtn.addEventListener('click', embla.scrollNext, false)
}

function disablePrevNextBtns(prevBtn, nextBtn, embla) {
  return () => {
    if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled')
    else prevBtn.setAttribute('disabled', 'disabled')

    if (embla.canScrollNext()) nextBtn.removeAttribute('disabled')
    else nextBtn.setAttribute('disabled', 'disabled')
  }
}
