var seconds = 30;

var x = setInterval(function() { 
    // Output the result in an element with id="demo"
 seconds-- ;
 document.getElementById("seconds").innerHTML = seconds + "s ";
     }, 1000);

    