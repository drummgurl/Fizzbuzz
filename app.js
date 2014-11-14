$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
    });

    $('input').keyup(function(event){
        if(event.which == 13) { //Enter key pressed
            event.preventDefault();
            
            var userNumber = parseInt($("input").val());

            for ( var i = userNumber; i <= 100; i++){
                if (i % 15 === 0) {
                    console.log('FizzBuzz'); 
                } else if (i % 3 === 0){
                    console.log('Fizz');
                } else if (i % 5 === 0){
                    console.log('Buzz');
                } else {
                    console.log(i);
                }
            } // closes for loop
        } // closes if at top

    }); // Closes input keyup handler
});  // Closes document ready