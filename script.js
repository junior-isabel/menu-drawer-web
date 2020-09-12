const menuDrawer = document.querySelector('[data-menu-drawer]')
const btnMenuDrawer = document.querySelector('[data-btn-menu-drawer]')
btnMenuDrawer.onclick = function (){
  if (!menuDrawer.classList.contains('show-menu')) menuDrawer.classList.add('show-menu')
  else menuDrawer.classList.remove('show-menu')
}
document.onmouseup =  function (e) {
  const target = e.target
  if (target !== menuDrawer && target !== btnMenuDrawer && !menuDrawer.contains(target) && menuDrawer.classList.contains('show-menu')) {
    menuDrawer.classList.remove('show-menu')
  }
}