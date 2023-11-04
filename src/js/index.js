const main = document.getElementById('main');
const soloMode = document.getElementById('solo-mode');
const friendsMode = document.getElementById('friends-mode');
const soloModeBtn = document.querySelector('.btn-solo');
const friendsModeBtn = document.querySelector('.btn-friends');
const dateTime = document.querySelector('.date-time');
const helpBtn = document.querySelector('.btn-help');
const helpBox = document.querySelector('.help-box');

soloModeBtn.addEventListener('click', () => {
  soloMode.style.display = 'block';
  main.style.display = 'none';
  friendsMode.style.display = 'none';

  helpBox.style.display = 'none';
});

friendsModeBtn.addEventListener('click', () => {
  soloMode.style.display = 'none';
  main.style.display = 'none';
  friendsMode.style.display = 'block';

  helpBox.style.display = 'none';
});

// 날짜와 시간
const formatDate = (date) => {
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  return date.toLocaleString('ko-KR', options);
};

const date = new Date();
const formattedDate = formatDate(date);
dateTime.textContent = formattedDate;

// help 버튼
const boxBackground = document.querySelector('.box-background');

helpBtn.addEventListener('click', () => {
  helpBox.style.display = 'block';
  boxBackground.style.display = 'block';
});
if ((helpBox.style.display = 'block')) {
  helpBox.addEventListener('click', () => {
    helpBox.style.display = 'none';
    boxBackground.style.display = 'none';
  });
  boxBackground.addEventListener('click', () => {
    helpBox.style.display = 'none';
    boxBackground.style.display = 'none';
  });
}
