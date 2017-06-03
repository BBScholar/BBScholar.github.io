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

$('#easter1').on('click', function () {
  localStorage.E1 = 1;
  alert('You found easter egg number 1');
  clicked[0] = 1
})



console.log(clicked);
