$(document).ready(function () {

	var dank_mode = false;
	$('#dank').on('click', function () {
		if ($('#dank').is(":checked")) {
  			var result = confirm('Enter this mode at your own risk! Do you wish to continue?');
  			if (result) {
  				console.log('dank: on');
          $('h1').css('animation', 'rotate1 2s ease-in-out infinite'); 
          $('h2').css('animation', 'rotate1 3s linear infinite');
          $('h3').css('animation', 'up-down 1s linear infinite');
          $('p').css('animation', '');



  			} else {
  				console.log('dank: off');
          $('#dank').prop('checked', false);
  			}
		} else {
      console.log('dank: off');
      $('h1').css('animation', 'none'); 
      $('h2').css('animation', 'none'); 

    }
	})

})