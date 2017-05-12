$(document).ready(function () {

	$('#dank').on('click', function () {
		if ($('#dank').is(":checked")) {
  			var result = confirm('Enter this mode at your own risk! Do you wish to continue?');
  			if (result) {
  				console.log('dank: on');
          $('h1').css('animation', 'rotate1 2s ease-in-out infinite'); 
          $('h2').css('animation', 'rotate1 3s linear infinite');
          $('h3').css('animation', 'up-down 1s linear infinite');
          $('p').css('animation', 'font-up 2s linear infinite');
          $('body').css('filter', 'blur(2px)');
          $('body').css('animation', 'rainbow 3s linear infinite');
          $('img').css('animation', 'sidetoside .1s linear infinite');

  			} else {
  				console.log('dank: off');
          $('#dank').prop('checked', false);
  			}
		} else {
      console.log('dank: off');
      $('h1').css('animation', 'none'); 
      $('h2').css('animation', 'none');
      $('h3').css('animation', 'none');
      $('p').css('animation', 'none');
      $('img').css('animation', 'none');
      $('body').css('filter', 'none');
      $('body').css('animation', 'none');
    }
	})

})