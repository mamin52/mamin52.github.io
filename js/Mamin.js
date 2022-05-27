var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://mdn.github.io/beginner-html-site/images/firefox-icon.png') {
      myImage.setAttribute ('src','https://www.mozilla.org/media/img/structured-data/logo-firefox-focus.f5f0b924422f.png');
    } else {
      myImage.setAttribute ('src','https://mdn.github.io/beginner-html-site/images/firefox-icon.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Введите свое имя');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Добро пожаловать, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Добро пожаловать, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}