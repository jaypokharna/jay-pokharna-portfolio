function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// (function()
// {
//   var words = [
//     "Frontend Developer",
//     "Django Developer",
//     "Video Editor",
//     "Photoshop Artist",
//     "Happy Person"
//   ],
//   i=0;
//   setInterval(function(){
//     $('#words').fadeOut(function(){
//       $(this).html(words[(i=(i+1) % words.length)]).fadeIn();
//     });
//   } , 2000 )
// })();

const texts = [
  "Frontend Developer",
    "Django Developer",
    "Video Editor",
    "Photoshop Artist",
    "Happy Person"
];


let currentIndex = 0;
let textElement = document.getElementById('words');
let currentText = texts[currentIndex];
let currentChar = 0;
let deleting = false;

function type() {
  if (!deleting && currentChar < currentText.length) {
    textElement.innerHTML += currentText.charAt(currentChar);
    currentChar++;
  } else {
    deleting = true;
    if (currentChar === 0) {
      deleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      currentText = texts[currentIndex];
      currentChar = 0;
      textElement.innerHTML = '';
    }
    if (deleting && currentChar >= 0) {
      textElement.innerHTML = currentText.substring(0, currentChar);
      currentChar--;
    }
  }
}

setInterval(type, 100);
setInterval(() => {
  deleting = true;
}, 3000);
