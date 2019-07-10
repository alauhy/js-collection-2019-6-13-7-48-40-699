'use strict';
const conditionThreeMuli=(numbers)=> numbers %3==0
function choose_multiples_of_three(collection) {
   return collection.filter(conditionThreeMuli);
  //implement here

}

module.exports = choose_multiples_of_three;
