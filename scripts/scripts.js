const html = document.querySelector("html");
const body = document.querySelector("body");
const links = document.querySelectorAll(".open-popup");
const wrapper= document.querySelector(".modal-wrapper");
const shadow = document.querySelector(".shadow-modal");
const shadowMenu = document.querySelector(".shadow-menu");
const popup = document.querySelector(".popup");
const card = document.querySelector(".pet-card");
const close = popup.querySelector(".close");
const mobMenu = document.querySelector('.mobile-menu');
const sandwitch = document.querySelector('.sandwitch');
const logo = document.querySelector('.main-menu-logo');
const ht = document.body.clientHeight;
shadow.style.height = ht + 'px';
shadowMenu.style.height = ht + 'px';

const showModal = (evt) => {
  evt.preventDefault();
  const currentY = window.pageYOffset + 86;
  popup.style.marginTop = currentY + 'px';
  wrapper.classList.remove("invisible");
  //popup.classList.remove("invisible");
};

const hideModal = (evt) => {
  wrapper.classList.add("invisible");};

const hideModalByClick = (evt) => {
  evt.preventDefault();
  hideModal();
};

const hideModalByEsc = (evt) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    hideModal();
  }
};

links.forEach((item) => item.addEventListener("click", showModal));
close.addEventListener("click", hideModalByClick);
shadow.addEventListener("click", hideModalByClick);
document.addEventListener(`keydown`, hideModalByEsc);

sandwitch.addEventListener('click', (evt) => {
  evt.preventDefault();
  mobMenu.classList.toggle('invisible');
  logo.classList.toggle('invisible');
  sandwitch.classList.toggle('closing');
  shadowMenu.classList.toggle('invisible');
});