$(document).ready(function() {
	$('form').on('submit', function(event) {
		event.preventDefault();
	});

	$('input').keyup(function(e){
        if(e.which == 13) {//Enter key pressed
        event.preventDefault();
        post('#results');
  		}

    for (var i = 1; i <= 100; i++){
        if (i % 15 === 0) {
            console.log('FizzBuzz'); 
            } else if (i % 3 === 0){
            console.log('Fizz');
            } else if (i % 5 === 0){
            console.log('Buzz');
            } else {
            console.log(i);
            }
        }
    }
}
