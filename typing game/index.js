const settingButton = document.querySelector(".setting")
const navBar = document.querySelector(".nav")
const difficulty = document.querySelector("#difficulty")
const leftTime = document.querySelector(".leftTime")
const typeWord = document.querySelector(".word .typeWord")
const typeInput = document.querySelector(".input input")
const typeScore = document.querySelector(".score .yourScore")
const totalScore = document.querySelector(".totalScore")
const card = document.querySelectorAll(".card")
const card1 = card[0]
const card2 = card[1]
const reloadBtn = document.querySelector(".reloadBtn")
let timer

let articles = "As the United States reckons with its history of racism, people across the country are calling for the removal of monuments that memorialize the historical figures who helped create or maintain systems of racial oppression. Some state governments have begun removing these monuments, like in Dallas, Raleigh, and Richmond. But many people are taking matters into their own hands and bringing down these stone celebrations themselves."
let words = [...new Set(articles.toLowerCase().replace(/[\,\.\?]/g, "").split(" "))]
  //隐藏nav
settingButton.addEventListener("click", function() {
  navBar.classList.toggle("navHide")
})

console.dir(typeInput);
//选择难度
difficulty.addEventListener("input", startCount)

function startCount() {
  if (words.length === 0) {
    changeCard()
    card2.children[0].innerText = "勝った！！"
  }
  typeWord.innerText = words.pop()
  clearInterval(timer)
  switch (difficulty.value) {
    case "easy":
      leftTime.innerText = 10
      break;
    case "medium":
      leftTime.innerText = 7
      break;
    case "hard":
      leftTime.innerText = 5
      break;
    case "dead":
      leftTime.innerText = 3
      break;
    default:
      break;
  }
  //时间到!
  timer = setInterval(() => {
    if (--leftTime.innerText == 0) {
      //总计得分
      totalScore.innerText = typeScore.innerText
      changeCard()
        //定时器清除
      clearInterval(timer)
    }
  }, 1000);
}

//判断输入的单词是否相等
typeInput.addEventListener("input", function() {
  if (this.value === typeWord.innerText) {
    //输入框清零
    typeInput.value = ""
    typeScore.innerText = +typeScore.innerText + 10
    startCount()
  }
})

//再次开始
reloadBtn.addEventListener("click", function() {
  //重置分数
  typeScore.innerText = 0

  //输入框清零
  typeInput.value = ""

  changeCard()

  //开始定时
  startCount()
})


function changeCard() {
  //显示/隐藏card1
  card1.classList.toggle("card1Hide")
    //显示/隐藏card2
  card2.classList.toggle("card2Hide")
}

//页面初始化
startCount()