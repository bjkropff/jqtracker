

// SETUP LIST OF CHARACTERS
$(document).ready(function() {
  //event.preventDefault();
  //==========================//
  //EDIT FUNCTION button
  $( "button.notSelected" ).on( "click", function( event ) {
    $('.selected').removeClass('selected btn-success');
    $(this).addClass('selected btn-success');
    var editName;
    var currentId = $(".selected").attr("id");
    for(var i = 0; i < list.length; i++){
      if(list[i].id == currentId)
      {
        var editName =  $('#nameEdit').val(list[i].name);
        var editInit = $('#initEdit').val(list[i].init);
        var editAC = $('#acEdit').val(list[i].ac);
        var editHP = $('#hpEdit').val(list[i].hp);
      }
    }
  });
  //===============================//
  //ADD FUNCTION button
    $( "button#edit" ).on( "click", function( event ) {
      $('.selected').parent().html('<button class="btn btn-primary notSelected"id="4" name="select">'
        + $('#nameEdit').val()
        + '</button></br>Init: ' +$('#initEdit').val()
        + " | AC: " + $('#acEdit').val()
        + " | HP: " +$('#hpEdit').val()
        +  ' <button class="btn btn-danger " name="delete">X</button></br>'
      );

      $( ".btn-danger" ).on( "click", function( event ) {
        $( this  ).parent('li').hide();
      });
  //====================================//
  // Clear values
      $('#nameEdit').val("");
      $('#initEdit').val("");
      $('#acEdit').val("");
      $('#hpEdit').val("");
    });
  });
