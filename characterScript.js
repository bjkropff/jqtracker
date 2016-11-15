

function Character(id, name, init, hp, ac, hero) {
  this.id = id;
  this.name = name;
  this.init = init;
  this.hp = hp;
  this.ac = ac;
  //0/false == npc, 1/true == pc
  this.hero = hero;
}

var LadyLips = new Character(1, "Lady Lips", 1, 32, 14, true);
var Tonka = new Character(2, "Tonka", 2, 31, 14, true);
var Karrik = new Character(3, "Karrik", 3, 40, 16, true);
var sirRobertDrake = new Character(4, "Sir Robert Drake", 0, 6, 3, true);
var list = [LadyLips, Tonka, Karrik, sirRobertDrake];

var newListItem = $('<li>' + list[1].name + '<li/>');
var count = 0;
// myArray will always be list -> arrange(list);
// assign to a new var
function arrange(myArray){
  var outArray = [LadyLips];
  //for(var i = 1; i < myArray.length; i++){
  console.log(outArray);

  myArray.forEach(function(i) {
    console.log(outArray);

    outArray.forEach(function (j) {
      console.log( "start"  + count)
      if (i.name === j.name ){
        console.log("Nothing");
        console.log(outArray);

      } else if( i.init <= j.init){
        console.log(j.name + " is greater than " + i.name);
        outArray.push(i);
        console.log(outArray);
      } else if( i.init > j.init ){
        console.log(i.name + " is greater than " + j.name);
        outArray.splice(j, 0, i);
        console.log(outArray);

      }

      console.log( "end"  + count++)

    })
  })
  console.log(outArray);
return outArray;
}


var newArrayList = arrange(list);


// SETUP LIST OF CHARACTERS
$(document).ready(function() {
  event.preventDefault();

  for(var i = 0; i < list.length; i++){
    $('ul#testlist').append($('<li> <button class="btn btn-primary notSelected" id="'+ list[i].id +'"" name="select">'+ list[i].name + '</button></br>Init: '
      + list[i].init + " | AC: "
      + list[i].ac + " | HP: " + list[i].hp
      +  ' <button class="btn btn-danger " name="delete">X</button></li>'
    ));

  }

//==========================//
//EDIT FUNCTION button

  $( "button.notSelected" ).on( "click", function( event ) {
    $('.selected').removeClass('selected btn-success');
    $(this).addClass('selected btn-success');

    var currentId = $(".selected").attr("id");
    for(var i = 0; i < list.length; i++){
      if(list[i].id == currentId)
      {
      var editName =  $('#name').val(list[i].name);
      var editInit = $('#init').val(list[i].init);
      var editAC = $('#ac').val(list[i].ac);
      var editHP = $('#hp').val(list[i].hp);
      }
    }
    console.log("selected");

    //===============================//
  });


  // //STILL IN WORKS - replace values
  // $( "form#add" ).on( "click", function( event ) {
  //   //$( ".selected" ).parent('li').hide();
  //   // var currentId = $(".selected").attr("id");
  //   // if(list[i].id == currentId){
  //   //
  //   //   $('#name').val();
  //   //   $('#name').val();
  //   //   $('#name').val();
  //   //   $('#name').val();
  //   // }
  //   console.log("added");
  //
  // });
    // $('ul#testlist').append($('<li> <button class="btn btn-primary notSelected" name="select">'+ list[i].name + '</button></br>Init: '
    //   + list[i].init + " | AC: "
    //   + list[i].ac + " | HP: " + list[i].hp
    //   +  ' <button class="btn btn-danger " name="delete">X</button></li>'
    // ));


//====================================//
  //DELETE FUNCTION button - DONE
  $( ".btn-danger" ).on( "click", function( event ) {
    $( this  ).parent('li').hide();
  });

  //ADD NEW NPC




// Come back for edit HP for pc/npc
/*
$( "#delete" ).on( "click", function( event ) {
  $(this li).hide();
  $(this).toggleClass('selected');
  $(this).toggleClass('li');
  $(this).hide('li');
});
*/

// come back later for hiding dead pc/npc
/*
$( "#delete" ).on( "click", function( event ) {
  $(this li).hide();
  $(this).toggleClass('selected');
  $(this).toggleClass('li');
  $(this).hide('li');
});
*/

//====================================//
  //ADD FUNCTION button - DONE

  // var addInit;
  // var addAC;
  // var addHP;
  // var addNew;
  // var addID;

  $( "button#add" ).on( "click", function( event ) {
    addID = list.length;
    var addName =  $('#name').val();
    var addInit = $('#init').val();
    var addAC = $('#ac').val();
    var addHP = $('#hp').val();
    var addNew = new Character(addID, addName, addInit, addAC, addHP, false);
    list.push(addNew);

    var newArrayList = arrange(list);
    console.log(newArrayList);

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

})
