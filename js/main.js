/*
@author Ramis Wachtler
 */

$(document).ready(function(){
    document.cookie = "selectedFlight=''";
});

$(".navbar-toggle").click(function(){
   $(".navbar-toggle").toggleClass("rotate");
});