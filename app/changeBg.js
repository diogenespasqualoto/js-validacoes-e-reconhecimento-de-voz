const darkModeBtn = document.getElementById('changeWallpaper-btn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  // adiciona a classe "changeWallpaper-btn" ao body quando o botão é clicado
  body.classList.toggle('changeWallpaper');
});