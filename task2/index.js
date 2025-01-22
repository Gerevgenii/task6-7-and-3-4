const checkbox1 = document.querySelectorAll('.checkbox');
const subDropdowns = document.querySelectorAll('.sub-dropdown');

let activeSubDrop = -1;

for (let i = 0; i < checkbox1.length; i++) {
  checkbox1[i].addEventListener("click", () => {
    if (subDropdowns[i].classList.contains("show")) {
      subDropdowns[i].classList.remove("show");
      activeSubDrop = -1;
    } else {
      if (activeSubDrop !== -1) {
        subDropdowns[activeSubDrop].classList.remove("show");
      }
      subDropdowns[i].classList.add("show");
      activeSubDrop = i;
    }
  })
}

const turnOnes = document.querySelectorAll('.turn-on')
const dropdowns = document.querySelectorAll('.dropdown')

let activeDrop = -1

for (let i = 0; i < turnOnes.length; i++) {
  turnOnes[i].addEventListener("click", () => {
    if (dropdowns[i].classList.contains("show")) {
      dropdowns[i].classList.remove("show");
      if (activeSubDrop !== -1) {
        subDropdowns[activeSubDrop].classList.remove("show");
        activeSubDrop = -1
      }
    } else {
      if (activeDrop !== -1) {
        dropdowns[activeDrop].classList.remove("show");

      }
      if (activeSubDrop !== -1) {
        subDropdowns[activeSubDrop].classList.remove("show");
        activeSubDrop = -1
      }
      dropdowns[i].classList.add("show")
      activeDrop = i;
    }
  })
}

const menu = document.querySelector('#menu-label')
menu.addEventListener('click', () => {
  menu.classList.toggle("pressed");
})
