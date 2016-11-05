function Character(id, name, init, hp, ac, hero) {
  this.id = id;
  this.name = name;
  this.init = init;
  this.hp = hp;
  this.ac = ac;
  //0/false == npc, 1/true == pc
  this.hero = hero;
}

var LadyLips = new Character(1, "Lady Lips", 3, 32, 14, true);
var Tonka = new Character(2, "Tonka", 2, 31, 14, true);
var Karrik = new Character(3, "Karrik", -1, 40, 16, true);
var sirRobertDrake = new Character(4, "Sir Robert Drake", 22, 6, 3, false);
var list = [LadyLips, Tonka, Karrik, sirRobertDrake];

var newListItem = $('<li>' + list[1].name + '<li/>');

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
  // $( "button.notSelected" ).on( "click", function( event ) {
  //   $('.selected').removeClass('selected btn-success');
  //   $(this).addClass('selected btn-success');
  //       var editName;
  //   var currentId = $(".selected").attr("id");
  //   for(var i = 0; i < list.length; i++){
  //     if(list[i].id == currentId)
  //     {
  //       var editName =  $('#name').val(list[i].name);
  //       var editInit = $('#init').val(list[i].init);
  //       var editAC = $('#ac').val(list[i].ac);
  //       var editHP = $('#hp').val(list[i].hp);
  //     }
  //   }
  // ^ commented out while editing the "add" function



  //===============================//
  // ADD FUNCTION button
  //STILL IN WORKS - replace and resetvalues
    $( "button#add" ).on( "click", function( event ) {
      $('#testlist').append('<button class="btn btn-primary notSelected"id="4" name="select">'
        + $('#name').val()
        + '</button></br>Init: ' +$('#init').val()
        + " | AC: " + $('#ac').val()
        + " | HP: " +$('#hp').val()
        +  ' <button class="btn btn-danger " name="delete">X</button></br>'
      );

      console.log("selected");


      // + list[i].id +'"" name="select">'+ list[i].name + '</button></br>Init: '
      // + list[i].init + " | AC: "
      // + list[i].ac + " | HP: " + list[i].hp
      // +  ' <button class="btn btn-danger " name="delete">X</button>');
      //^part of edit function commented out for ADD function test
  //====================================//

      $('#name').val();
      $('#init').val("");
      $('#ac').val("");
      $('#hp').val("");
    });
  // }); <--use with EDIT funciton button
  //====================================//
  //DELETE FUNCTION button - DONE
  $( ".btn-danger" ).on( "click", function( event ) {
    $( this  ).parent('li').hide();
  });
})
