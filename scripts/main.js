var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_0020.JPG') {
      myImage.setAttribute ('src','images/IMG_0021.jpg');
    } else {
      myImage.setAttribute ('src','images/IMG_0021.JPG');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Have a good day, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Have a good day, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}