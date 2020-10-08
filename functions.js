// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// addTwoNumbers(0, 0);
// addTwoNumbers(1, 0);
// addTwoNumbers(1, 1);

function sayHello(name) {
  if (name === 'Will') {
    return `No more testing ${name}!`;
  } else
  return `Hi there ${name}!`;
}

// sayHello('Leta');
// sayHello('Casey');
// sayHello('Will');

function buildCar(color, type) {
  var car = {
    color: color,
    type: type
  };
  if (car.color === undefined && car.type === undefined) {
    return {};
  } else {
    return car;
  }
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}
