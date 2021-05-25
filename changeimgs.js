// a bit of work on changing images
function changeImg() {
  let image = document.querySelector('#img');
  roughNight = `url("images/night.jpg")`;
  document.body.style.backgroundImage = roughNight;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'top';
}

function weGo() {
  setTimeout(partOne, 1000);
}

function hideaway() {
  document.querySelector('.title').style.display='none';
  document.querySelector('#img').style.display='none';
  document.querySelector('.container').style.opacity ='15%';
}

function functionS() {
  weGo();
  changeImg();
  hideaway();
}
