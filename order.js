function Character(id, name, init, hp, ac, hero) {
  this.id = id;
  this.name = name;
  this.init = init;
  this.hp = hp;
  this.ac = ac;
  //0/false == npc, 1/true == pc
  this.hero = hero;
}
var LadyLips = new Character(1, "Lady Lips", 8, 32, 14, true);
var Tonka = new Character(2, "Tonka", 6, 31, 14, true);
var Karrik = new Character(3, "Karrik", 4, 40, 16, true);
// var sirRobertDrake = new Character(4, "Sir Robert Drake", 22, 6, 3, true);
//var listOrder = [LadyLips, Tonka, Karrik, sirRobertDrake];
var listOrder = [LadyLips, Tonka, Karrik];
var order =[];

// console.log(LadyLips.init);
// console.log(Tonka.init);
// console.log(Karrik.init);

// for(var i = 0; i < listOrder.length; i++){
//   var first = listOrder[i].init;
//   console.log(listOrder[i].init);
//   if( listOrder[1].init ){
//     order.push(Tonka);
//     order.push(listOrder[i]);
//   } else{
//     order.push(listOrder[i]);
//     order.push(Tonka)
//   }
//
//
// }
// console.log(order);


function Order(inputList){
  for(var i = 0; i < listOrder.length; i++){

    if( !order ){
      order.push(inputList[i]);
      console.log(order[].);
    }

    // for(var j = 0; j <= order.length; j++){
    //   console.log(order[j].init);
    //   if( inputList[i].init > order[j].init ){
    //     order.slice(j, 0,inputList[i]);
    //   }
    //   else if( inputList[i].init < inputList[j].init ){
    //       order.push(inputList[i]);
    //   }
    //   console.log('warning');
    //
    // }

  }

    previous = i;
    console.log(order);

}



Order(listOrder);
