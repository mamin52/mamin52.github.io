var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute ('src','images/cat.png');
    } else {
      myImage.setAttribute ('src','images/firefox.png');
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