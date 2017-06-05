var clicked = [];
// 0 = Off
// 1 = On

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

function easter1 () {
  console.log('easter 1');
  alert('You found an Easter Egg');
  clicked[0] = 1;
  checkEaster();
}

function checkEaster () {
  var count = 0
  for (var i = 0; i < clicked.length; i++) {
    if (clicked[i] == 1) {
      count ++
    }
  }
  if (count == 5) {
    // unlocks easter eggs
    
  }
}

console.log(clicked);
