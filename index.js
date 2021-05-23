const menuBar = document.querySelector('.menu-bars')

menuBar.addEventListener('click', () => {
  console.log('working');
  document.querySelector('.nav-main').classList.toggle('open');
  document.querySelector('.top-header').classList.toggle('stick');
})
