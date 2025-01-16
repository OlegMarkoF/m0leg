// Открытие/закрытие гамбургер меню
const hamburger = document.querySelector(".hamburger");
const popup = document.querySelector(".popup");
const openHamburgerButton = document.querySelector(".hamburger-menu");
const closeHamburgerButton = document.querySelector(".hamburger__close-menu");
const clickMenuButton = document.getElementsByClassName("service-button");
const contactsLink = document.querySelectorAll(".contacts__link");

// Гамбургер меню
const openHamburger = () => {
  hamburger.classList.add("hamburger_opened");
};
const closeHamburger = () => {
  hamburger.classList.remove("hamburger_opened");
};


// Открыть попап
const openPopup = () => {
  popup.classList.add("popup_opened");
};
const closePopup = () => {
  popup.classList.remove("popup_opened");
}

// Закрыть модальные окна
function closeModalByEsc(evt) {
  if (evt.key === "Escape") {
    if (hamburger.classList.contains("hamburger_opened") === true) {
      closeHamburger();
    }
    if (popup.classList.contains("popup_opened") === true) {
      closePopup();
    }
  }
}

function closeHamburgerClickButton(evt) {
  if (evt.key === "click") {
    closeHamburger();
  }
}

// function closePopupClickButton(evt) { <-- Включить эту функцию если будет нужен крестик для закрытия окна
//   if (evt.key === "click") {
//     closePopup();
//   }
// }

function closeMadalByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    if (hamburger.classList.contains("hamburger_opened") === true) {
      closeHamburger();
    }
    if (popup.classList.contains("popup_opened") === true) {
      closePopup();
    }
  }
}
// function closePopupOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     closePopup();
//   }
// }

let i;

openHamburgerButton.addEventListener("click", openHamburger);
for (i = 0; i < clickMenuButton.length; i++) {
  clickMenuButton[i].addEventListener("click", closeHamburger);
}

// Закрытие модальных окон
for (i = 0; i < contactsLink.length; i++) {
  contactsLink[i].addEventListener("click", openPopup);
}
closeHamburgerButton.addEventListener("click", closeHamburger);
hamburger.addEventListener("click", closeMadalByOverlay);
popup.addEventListener("click", closeMadalByOverlay);
window.addEventListener("keyup", closeModalByEsc);


