function add(){
  $( "button#add" ).on( "click", function( event ) {
    $( 'li' ).hide();
    addID = list.length;
    var addName =  $('#name').val();
    var addInit = $('#init').val();
    var addAC = $('#ac').val();
    var addHP = $('#hp').val();
    var addNew = new Character(addID, addName, addInit, addAC, addHP, false);
    list.push(addNew);


    list.sort(compare);
    list = list.reverse();


    for(var i = 0; i < list.length; i++){
      $('ul#testlist').append($('<li> <button class="btn btn-primary notSelected" id="'+ list[i].id +'"" name="select">'+ list[i].name + '</button></br>Init: '
        + list[i].init + " | AC: "
        + list[i].ac + " | HP: " + list[i].hp
        +  ' <button class="btn btn-danger " name="delete">X</button></li>'
      ));
    }

    clickdelete();

  });
}
