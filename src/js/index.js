const main = document.getElementById('main');
const soloMode = document.getElementById('solo-mode');
const friendsMode = document.getElementById('friends-mode');
const soloModeBtn = document.querySelector('.btn-solo');
const friendsModeBtn = document.querySelector('.btn-friends');

soloModeBtn.addEventListener('click', function () {
  soloMode.style.display = 'block';
  main.style.display = 'none';
  friendsMode.style.display = 'none';
});

friendsModeBtn.addEventListener('click', function () {
  soloMode.style.display = 'none';
  main.style.display = 'none';
  friendsMode.style.display = 'block';
});
