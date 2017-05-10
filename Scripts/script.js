$(document).ready(function () {
	
	var dank_mode = false;
	$('#dank').on('click', function () {
		if ($('#dank').is(":checked")) {
  			var result = confirm('Enter this mode at your own risk! Do you wish to continue?');
  			if (result) {
  				console.log(true);

  			} else {
  				console.log(false);
  			}
		}
	})

})