
const a = document.querySelectorAll('.turn-on')

let safeIndex = -1

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", () => {
    const str = "pressed";
    if (a[i].classList.contains("pressed")) {
      a[i].classList.remove("pressed")
      a[i].classList.add("unpressed");
    } else {
      if (safeIndex !== -1) {
        a[safeIndex].classList.remove("pressed");
        a[safeIndex].classList.remove("unpressed");
      }
      a[i].classList.add("pressed")
      a[i].classList.remove("unpressed");
      safeIndex = i;
    }
  })
}



const checkbox1 = document.querySelectorAll(':is(.checkbox1, .checkbox2, .checkbox3, .checkbox4)')

let safeIndex1 = -1

for (let i = 0; i < checkbox1.length; i++) {
  checkbox1[i].addEventListener("click", () => {
    if (checkbox1[i].classList.contains("pressed")) {
      checkbox1[i].classList.remove("pressed")
    } else {
      if (safeIndex1 !== -1) {
        checkbox1[safeIndex1].classList.remove("pressed");
      }
      checkbox1[i].classList.add("pressed")
      safeIndex1 = i;
    }
  })
}

const checkbox2 = document.querySelectorAll(':is(.checkbox5, .checkbox6, .checkbox7, .checkbox8)')

let safeIndex2 = -1

for (let i = 0; i < checkbox2.length; i++) {
  checkbox2[i].addEventListener("click", () => {
    const str = "pressed";
    if (checkbox2[i].classList.contains("pressed")) {
      checkbox2[i].classList.remove("pressed")
    } else {
      if (safeIndex2 !== -1) {
        checkbox2[safeIndex2].classList.remove("pressed");
      }
      checkbox2[i].classList.add("pressed")
      safeIndex2 = i;
    }
  })
}

const menu = document.querySelector('#menu-label')
menu.addEventListener('click', () => {
  menu.classList.toggle("pressed");
})
