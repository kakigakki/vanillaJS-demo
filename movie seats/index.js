const movies = document.querySelector("#movies")
const moviePrice = document.querySelector(".selected")
const seats = document.querySelectorAll(".seat")
const totalPrice = document.querySelector(".price")
const count = document.querySelector(".count")


function changePrice(num) {
  moviePrice.innerText = num
  totalPrice.innerText = num * +count.innerText
}

movies.addEventListener("input", function() {
  switch (movies.value) {
    case "kimetu":
      changePrice(1990)
      break;
    case "haikyu":
      changePrice(1760)
      break;
    case "naruto":
      changePrice(1230)
      break;
    case "onepiece":
      changePrice(2010)
      break;
    default:
      break;
  }
})

seats.forEach(item => {
  item.addEventListener("click", function() {
    item.classList.toggle("chosen")
    if (item.classList.contains("chosen")) {
      count.innerText++
        totalPrice.innerText = +totalPrice.innerText + +moviePrice.innerText
    } else {
      count.innerText--
        totalPrice.innerText = +totalPrice.innerText - +moviePrice.innerText
    }
  })
})