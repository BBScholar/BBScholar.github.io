var clicked = [];
// 0 = Off
// 1 = On

var first = 0;
if (localStorage.first = 1) {
  first = 1;
}
console.log(first);

if (first = 0) {
  alert('Find all 5 easter eggs to play a secret game! Easter eggs are highlighted when hovered over. Click them to activate them.');
  localStorage.first = 1;
}

clicked[0] = Number(localStorage.E1);
clicked[1] = Number(localStorage.E2);
clicked[2] = Number(localStorage.E3);
clicked[3] = Number(localStorage.E4);
clicked[4] = Number(localStorage.E5);

for (var i = 0; i < 5; i++) {
  if (clicked[i] != 1 && clicked[i] != 0) {
    clicked[i] = 0;
  }
}

function easter (number) {
  console.log('easter ' + number);
  alert('You found an Easter Egg! Number ' + number + ' of ' + clicked.length);
  clicked[number - 1] = 1;
  checkEaster();
}

function checkEaster () {
  var count = 0
  for (var i = 0; i < clicked.length; i++) {
    if (clicked[i] == 1) {
      count++;
    }
  }
  if (count == clicked.length) {
    // unlocks easter eggs
    window.location = "https://bbscholar.github.io/holston.html";
    
  }
}

console.log(clicked);
