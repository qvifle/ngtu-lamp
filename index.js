let model = document.getElementById("model")
let radios = document.querySelectorAll('input[type="radio"]')
let image = document.createElement("img")
let imageName = "111"
const header = document.getElementById("header")

document.addEventListener("scroll", () => {
  if (scrollY === 0) {
    header.classList.add("bg-transparent")
    header.classList.remove("bg-gray-900")
  }
  else {
    header.classList.add("bg-gray-900")
    header.classList.remove("bg-transparent")
  }
})

const getSrcString = (name) => {
  return `./assets/${name}.jfif`
}

const changeImagename = (value, pos) => {
  let strArray = imageName.split("");
  strArray[pos] = value;
  imageName = strArray.join("");
  image.src = getSrcString(imageName)
}

image.src = getSrcString(imageName)
image.classList = "image"
model.appendChild(image)

radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    if (index === 0) {
      changeImagename(1, 2)
    }
    else if (index === 1) {
      changeImagename(2, 2)
    }
    else if (index === 2) {
      changeImagename(3, 2)
    }
    else if (index === 3) {
      changeImagename(1, 1)
    }
    else if (index === 4) {
      changeImagename(2, 1)
    }
    else if (index === 5) {
      changeImagename(3, 1)
    }
    else if (index === 6) {
      changeImagename(1, 0)
    }
    else if (index === 7) {
      changeImagename(2, 0)
    }
    else if (index === 8) {
      changeImagename(3, 0)
    }
  })
})


