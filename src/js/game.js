const buttons = document.querySelectorAll(".btn-play");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const modal = document.getElementById("modal");
const playerOneImage = document.querySelector(".one-img");
const playerTwoImage = document.querySelector(".two-img");
const friendsOneImage = document.querySelector(".friends-one-img");
const friendsTwoImage = document.querySelector(".friends-two-img");

const gameResult = ["가위", "바위", "보"];
const imgUrls = {
  가위: "../img/scissors.png",
  바위: "../img/rock.png",
  보: "../img/paper.png",
};

// 게임이 시작되고, 모달창이 떴다가 닫힐 때 까지 '~내기' 버튼 비활성화
const stopPlay = () => {
  buttons.forEach((button) => {
    button.removeEventListener("click", play);
  });
};

// 게임
const play = (event) => {
  const playerTwoText = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  const friendsRandomIndex = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  const playerOne = gameResult[randomIndex];
  const images = gameResult.slice();

  let playerTwo;
  let currentIndex = 0;

  // solo mode
  if (playerTwoText.includes("내기")) {
    playerTwo = playerTwoText.replace(" 내기", "");

    playerTwoImage.src = imgUrls[playerTwo];
    playerTwoImage.alt = playerTwo;

    const intervalId = setInterval(() => {
      playerOneImage.src = imgUrls[images[currentIndex]];
      playerOneImage.alt = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      playerOneImage.src = imgUrls[playerOne];
      playerOneImage.alt = playerOne;
    }, 2000);
    soloGame(playerOne, playerTwo);
  }

  // friends mode
  else {
    playerTwo = gameResult[friendsRandomIndex];

    const intervalId = setInterval(() => {
      friendsOneImage.src = imgUrls[images[currentIndex]];
      friendsOneImage.alt = images[currentIndex];
      friendsTwoImage.src = imgUrls[images[currentIndex]];
      friendsTwoImage.alt = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      friendsOneImage.src = imgUrls[playerOne];
      friendsOneImage.alt = playerOne;
      friendsTwoImage.src = imgUrls[playerTwo];
      friendsTwoImage.alt = playerTwo;
    }, 2000);
    friendsGame(playerOne, playerTwo);
    console.log(playerOne, playerTwo);
  }

  stopPlay();
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
