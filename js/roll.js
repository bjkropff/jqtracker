function roll(){
  $( "button#roll" ).on( "click", function( event ) {
    $(' h1 ').hide();
    // $( '.result' ).hide();

    $('#result').append($('<h1 class="result">'+ (Math.floor(Math.random() * 20) + 1) + '</h1>'));
  });

}
