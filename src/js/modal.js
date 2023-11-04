// 게임 결과 모달창
const showModal = (message, resultImg) => {
  const modal = document.getElementById('modal');
  const modalResult = document.querySelector('.modal-result');
  modalResult.textContent = message;

  const imgElement = document.createElement('img');
  imgElement.src = resultImg;
  modalResult.appendChild(imgElement);

  modal.style.display = 'block';
  disableGame();
};

const disableGame = () => {
  buttons.forEach((button) => {
    button.removeEventListener('click', play);
  });
};

// '다시하기' 버튼
const replayBtn = document.querySelector('.modal-replay');
replayBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  resetGame();
});

const resetGame = () => {
  const modal = document.getElementById('modal');
  // player 창 초기화
  playerTwoImage.src = '';
  playerTwoImage.alt = '';
  playerOneImage.src = '';
  playerOneImage.alt = '';

  friendsOneImage.src = '';
  friendsOneImage.alt = '';
  friendsTwoImage.src = '';
  friendsTwoImage.alt = '';
  modal.style.display = 'none';

  buttons.forEach((button) => {
    button.addEventListener('click', play);
  });
};

// '처음으로 돌아가기' 버튼
const returnBtn = document.querySelector('.modal-return');
returnBtn.addEventListener('click', () => {
  soloMode.style.display = 'none';
  friendsMode.style.display = 'none';
  modal.style.display = 'none';
  main.style.display = 'block';
  resetGame();
});
