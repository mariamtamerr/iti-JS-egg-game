'use Strict'; 

// --------------------- TRIAL 2 ------------------------------------------------------

let fallingEgg = document.querySelector(".good");
let basket = document.querySelector(".basket");
fallingEgg.style.left = Math.floor(Math.random()*(window.innerWidth - fallingEgg.width)) + "px";




let moveRight;
let moveLeft;
// basket.focus(); 
function aliasInterval() {

  // 3shan el egg tnzl mn el awll mn foo2 ltaht
  let topEgg = fallingEgg.offsetTop; //shof hya fen fl top
  topEgg += 10; //nzlhaly kol shwya as a counter +10 3la el current offsetTop
  if(topEgg < window.innerHeight - fallingEgg.height) {

    fallingEgg.style.top = topEgg + "px";
  } 

  // case lose : rg3ly kollo tany tnzl mn fo2 new round : 1)  2)
  else {
    clearInterval(fallInterval); //stop when you're down don't move la down wla up
    fallingEgg.src = "/images/Uovo_sorridente.png";
    setTimeout(() => { //da el htl3haly tany foo2 : lsoura l aslya .. w top 0 , w tnzly randomly
      fallingEgg.src = "/images/1182.png";
      fallingEgg.style.top = 0;
      fallingEgg.style.left = Math.floor(Math.random()*(window.innerWidth - fallingEgg.width)) + "px";
      fallInterval = setInterval(aliasInterval,200);
    }, 1000);
  }

  // case win : rg3ly kollo tany
  if(topEgg+fallingEgg.height >= basket.offsetTop && fallingEgg.offsetLeft + fallingEgg.width >= basket.offsetLeft &&
      fallingEgg.offsetLeft <= basket.offsetLeft + basket.offsetWidth) {
    clearInterval(fallInterval);

    fallingEgg.style.display = "none";
    setTimeout(() => {
      fallingEgg.style.display = "block";
      fallingEgg.style.top = 0;
      fallingEgg.style.left = Math.floor(Math.random()*(window.innerWidth - fallingEgg.width)) + "px";
      fallInterval = setInterval(aliasInterval,200);
    }, 1000);
  } 
}


let fallInterval = setInterval(aliasInterval,200);

window.addEventListener("keydown", (event) => {
   {
    if (event.key === "ArrowRight") {
      moveBasket("moveRight");
    } else if (event.key === "ArrowLeft") {
      moveBasket("moveLeft");
    }
  }
});
// let id;
function moveBasket(direction) {
  steps = 100;
  currentPosition = basket.offsetLeft;
  console.log(currentPosition);

  if (direction == "moveRight") {
    moveRight = currentPosition + steps;
    console.log(currentPosition);
    // console.log(moveRight);
    basket.style.left = moveRight + "px";
  } else if (direction == "moveLeft") {
    moveLeft = currentPosition - steps;
    console.log(moveLeft);
    basket.style.left = moveLeft + "px";
  }

}
