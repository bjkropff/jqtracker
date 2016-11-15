// SETUP LIST OF CHARACTERS
$(document).ready(function() {
  //event.preventDefault();
  //====================================//
  //DELETE FUNCTION button - DONE
  $( ".btn-danger" ).on( "click", function( event ) {
    $( this  ).parent('li').hide();
  });
})
