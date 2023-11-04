// 가위바위보 승패
const soloGame = (playerOne, playerTwo) => {
  let message = '';
  let resultImg = '';

  if (playerTwo === playerOne) {
    message = 'Draw.';
    resultImg = '/img/draw-img.png';
  } else {
    switch (playerTwo + playerOne) {
      case '가위보':
      case '바위가위':
      case '보바위':
        message = 'You Win!';
        resultImg = '/img/win-img.png';
        break;
      case '보가위':
      case '가위바위':
      case '바위보':
        message = 'You Losed..';
        resultImg = '/img/lose-img.png';
        break;
    }
  }
  setTimeout(() => {
    showModal(message, resultImg);
  }, 3500);
};
