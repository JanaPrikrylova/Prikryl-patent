const openMenu = document.querySelector(".header__hamburger");
const closeMenu = document.querySelector(".header__cross");
const navClose = document.querySelectorAll(".nav-close");
const navMenu = document.querySelector(".header__nav");


const navigation = () => {
  navMenu.classList.toggle("open");
}

for (let i = 0; i < navClose.length; i++) {
  navClose[i].addEventListener("click", navigation);
}


openMenu.addEventListener("click", navigation);
closeMenu.addEventListener("click", navigation);

// --------------------------------- Sub-menu

const headerItemList = document.querySelector('.header__item-list');
const headerSublistMenu = document.querySelector('.header__sub-list-menu');

const submenu = () => {
  headerSublistMenu.classList.toggle("services__test");
}

headerItemList.addEventListener('click', submenu);