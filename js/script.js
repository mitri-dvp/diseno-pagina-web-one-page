// Elements
const burger = document.querySelector('.burger')
const mobile_nav = document.querySelector('.mobile-nav')
// const modal_exit = document.querySelector('.modal-exit')

// Listeners
burger.addEventListener('click', () => {
  mobile_nav.classList.toggle('hidden')
})
// modal_exit.addEventListener('click', (e) => {
//   e.target.closest('.modal-container').remove()
// })
