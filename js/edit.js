// Bug: select, then edit any number of times for to remove

function edit(){
  $( "button.notSelected" ).on( "click", function( event ) {
    $('.selected').removeClass('selected btn-success');
    $(this).addClass('selected btn-success');
    var currentId = $(".selected").attr("id");
    var isHero = $(".selected").attr("hero");

    for(var i = 0; i < list.length; i++){
      if(list[i].id == currentId) {
        var editName =  $('#nameEdit').val(list[i].name);
        var editInit = $('#initEdit').val(list[i].init);
        var editAC = $('#acEdit').val(list[i].ac);
        var editHP = $('#hpEdit').val(list[i].hp);
      }
    }

    $( "button#edit" ).on( "click", function( event ) {
      var editName =  $('#nameEdit').val();
      var editInit = $('#initEdit').val();
      var editAC = $('#acEdit').val();
      var editHP = $('#hpEdit').val();
      list.splice( list[i], 1 )
      var addNew
      addNew = new Character(currentId, editName, editInit, editAC, editHP, isHero);
      list.push(addNew);
      list.sort(compare);
      list = list.reverse();

      $( '#testlist' ).children('li ').hide();

      for(var i = 0; i < list.length; i++){
        $('ul#testlist').append($('<li> <button class="btn btn-primary notSelected" id="'+ list[i].id +'"" name="select">'+ list[i].name + '</button></br>Init: '
          + list[i].init + " | AC: "
          + list[i].ac + " | HP: " + list[i].hp
          +  ' <button class="btn btn-danger " name="delete">X</button></li>'
        ));

        clickdelete();
      }

    //====================================//
    // Clear values by setting them to blank
        // $('#nameEdit').val("");
        // $('#initEdit').val("");
        // $('#acEdit').val("");
        // $('#hpEdit').val("");
    });

    clickdelete();

  });

}
