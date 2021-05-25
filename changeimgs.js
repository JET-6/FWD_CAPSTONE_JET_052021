// a bit of work on changing images
function changeImg() {
  let image = document.querySelector('#img');
  roughNight = `url("images/night.jpg")`;
  image.style.backgroundImage = roughNight;
}

function weGo() {
  setTimeout(partOne, 1000);
}


function functionS() {
  weGo();
  changeImg();
}
