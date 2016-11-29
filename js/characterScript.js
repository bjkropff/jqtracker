function Character(id, name, init, hp, ac, hero) {
  this.id = id;
  this.name = name;
  this.init = init;
  this.hp = hp;
  this.ac = ac;
  //0/false == npc, 1/true == pc
  this.hero = hero;
}

// Compare is a sort function
function compare(a,b) {
  return a.init - b.init;
}

var list = [];
var LadyLips = new Character(1, "Lady Lips", 1, 32, 14, true);
var Tonka = new Character(2, "Tonka", 2, 31, 14, true);
var Karrik = new Character(3, "Karrik", 3, 40, 16, true);
var sirRobertDrake = new Character(4, "Sir Robert Drake", 0, 6, 3, true);
var list = [LadyLips, Tonka, Karrik, sirRobertDrake];
var count = 0;
list.sort(compare);
list = list.reverse();

// SETUP LIST OF CHARACTERS
$(document).ready(function() {
  //event.preventDefault();

  for(var i = 0; i < list.length; i++){
    $('ul#testlist').append($('<li class="id' + list[i].id + '"> <button class="btn btn-primary notSelected" id="'+ list[i].id +'"" name="select">'+ list[i].name + '</button></br>Init: '
      + list[i].init + " | AC: "
      + list[i].ac + " | HP: " + list[i].hp
      +  ' <button class="btn btn-danger " name="delete">X</button></li>'
    ));
  }

  //====================================//
    //ADD FUNCTION button - DONE

  add();

//==========================//
//EDIT FUNCTION button

  edit();


//====================================//
  //DELETE FUNCTION button - DONE
  clickdelete();

//====================================//
  //NEXT FUNCTION button - DONE
  next();

  //====================================//
    //ROLL FUNCTION button - DONE
  roll();

})
