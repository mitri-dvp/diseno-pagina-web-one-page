// Elements
const burger = document.querySelector('.burger')
const mobile_nav = document.querySelector('.mobile-nav')

// Listeners
burger.addEventListener('click', () => {
  mobile_nav.classList.toggle('hidden')
})
