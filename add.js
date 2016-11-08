$(document).ready(function() {
  event.preventDefault();
  $( "button#add" ).on( "click", function( event ) {
    $('#testlist').append('<li><button class="btn btn-primary notSelected" name="select">'
      + $('#name').val()
      + '</button></br>Init: ' +$('#init').val()
      + " | AC: " + $('#ac').val()
      + " | HP: " +$('#hp').val()
      +  ' <button class="btn btn-danger " name="delete">X</button></li>'
    );
    $( ".btn-danger" ).on( "click", function( event ) {
      $( this  ).parent('li').hide();
    });
  });
});
