// comment out the delete dunction
// the 'X' should hide and remove the character from the list
function clickdelete (){
  $( ".btn-danger" ).on( "click", function( event ) {
    var currentId = $( this ).siblings("button").attr("id");
    console.log(currentId);
    console.log("currentId");
    console.log($( this ).siblings("button").attr("id"));
    $( this  ).parent('li').hide();
    for(var i = 0; i < list.length; i++){
      if(list[i].id == currentId) {
        list.splice( list[i], 1 )
      }
    }
  });
}
