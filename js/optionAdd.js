$(document).ready(function() {
  $('#addPCs').append($('</br><div ><form class="" action="" method=""><input id="name"  placeholder="name"><input id="init"  placeholder="init"><input id="ac"  placeholder="ac"><input id="hp" placeholder="hp"></div>'
));
  $( "button#more" ).on( "click", function( event ) {
    // console.log("this thing");
      $('#addPCs').append($('</br><div><form class="" action="" method=""><input id="name"  placeholder="name"><input id="init"  placeholder="init"><input id="ac" placeholder="ac"><input id="hp" placeholder="hp"></div>'
      ));
      // console.log(i);
  });

});


// <div class="col-lg-4">
// <form class="" action="" method="">
// <input id="name"  placeholder="name"> </br>
// <input id="init"  placeholder="init"> </br>
// <input id="ac"  placeholder="ac"> </br>
// <input id="hp" placeholder="hp"> </br>
// <button action="submit" class="btn btn-primary" id="add">Add</button>
// <button class="btn btn-primary" id="add">Add</button>
// </div>
