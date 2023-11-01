const buttons = document.querySelectorAll('.btn-play');
const playerComputer = document.querySelector('.player-computer');
const playerUser = document.querySelector('.player-user');
const modal = document.getElementById('modal');

const gameResult = ['가위', '바위', '보'];

const imgUrls = {
  가위: './img/scissors.png',
  바위: './img/rock.png',
  보: './img/paper.png',
};

const game = (user, computer) => {
  let message = '';
  let resultImg = '';

  if (user === computer) {
    message = 'Draw.';
    resultImg = './img/draw-img.png';
  } else {
    switch (user + computer) {
      case '가위보':
      case '바위가위':
      case '보바위':
        message = 'You Win!';
        resultImg = './img/win-img.png';
        break;
      case '보가위':
      case '가위바위':
      case '바위보':
        message = 'You Losed..';
        resultImg = './img/lose-img.png';
        break;
    }
  }
  setTimeout(() => {
    showModal(message, resultImg);
  }, 3500);
};

const play = (event) => {
  const userText = event.target.innerText;
  const user = userText.replace(' 내기', '');
  const randomIndex = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  const computer = gameResult[randomIndex];

  const userImage = document.getElementById('user-image');
  const computerImage = document.getElementById('computer-image');

  userImage.src = imgUrls[user];
  userImage.alt = user;

  const images = gameResult.slice();
  let currentIndex = 0;

  const intervalId = setInterval(() => {
    computerImage.src = imgUrls[images[currentIndex]];
    computerImage.alt = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);
    computerImage.src = imgUrls[computer];
    computerImage.alt = computer;
  }, 2000);

  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});

// 게임 결과 모달창
const showModal = (message, resultImg) => {
  const modal = document.getElementById('modal');
  const modalResult = document.querySelector('.modal-result');
  modalResult.textContent = message;

  const imgElement = document.createElement('img');
  imgElement.src = resultImg;
  modalResult.appendChild(imgElement);

  modal.style.display = 'block';
};

const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// '다시하기' 버튼
const replayBtn = document.querySelector('.modal-replay');
replayBtn.addEventListener('click', () => {
  replay();
});

function replay() {
  const userImage = document.getElementById('user-image');
  const computerImage = document.getElementById('computer-image');
  const modal = document.getElementById('modal');

  userImage.src = ''; // 사용자 이미지 초기화
  userImage.alt = '';
  computerImage.src = ''; // 컴퓨터 이미지 초기화
  computerImage.alt = '';
  modal.style.display = 'none'; // 모달 숨기기
}
