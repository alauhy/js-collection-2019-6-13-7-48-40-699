'use strict';

const conditionEven = (numbers) => numbers % 2 === 0;
function choose_even(collection) {
  return collection.filter(conditionEven);
  //implement here
}

module.exports = choose_even;
