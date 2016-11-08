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
var sirRobertDrake = new Character(4, "Sir Robert Drake", 22, 6, 3, true);
var list = [LadyLips, Tonka, Karrik, sirRobertDrake];
// SETUP LIST OF CHARACTERS
$(document).ready(function() {
  event.preventDefault();
  for(var i = 0; i < list.length; i++){
    $('ul#testlist').append($('<li> <button class="btn btn-primary notSelected" id="' + list[i].id + '" name="select">'+ list[i].name + '</button></br>Init: '
      + list[i].init + " | AC: "
      + list[i].ac + " | HP: " + list[i].hp
      +  ' <button class="btn btn-danger " name="delete">X</button></li>'
    ));
  }
});
