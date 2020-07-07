const movies = document.querySelector("#movies")
const moviePrice = document.querySelector(".selected")
const seats = Array.from(document.querySelectorAll(".seat"))
const totalPrice = document.querySelector(".price")
const count = document.querySelector(".count")


function changePrice(num) {
  moviePrice.innerText = num
  totalPrice.innerText = num * +count.innerText
}

//添加选择事件
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

for (let i = 0; i < seats.length; i++) {
  //初始化选中的位置
  if (i % 7 == Math.floor(Math.random() * 10)) {
    seats[i].classList.add("soldExample")
    i--
    continue
  }
  //添加点击事件
  seats[i].addEventListener("click", function() {
    this.classList.toggle("chosen")
    if (this.classList.contains("chosen")) {
      count.innerText++
        totalPrice.innerText = +totalPrice.innerText + +moviePrice.innerText
    } else {
      count.innerText--
        totalPrice.innerText = +totalPrice.innerText - +moviePrice.innerText
    }
  })
}