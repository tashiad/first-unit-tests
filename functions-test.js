// functions-test.js

var assert = require('chai').assert;
var addTwoNumbers = require('./functions.js').addTwoNumbers;
var sayHello = require('./functions.js').sayHello;
var buildCar = require('./functions.js').buildCar;

describe('functions', function() {

  describe('addTwoNumbers', function() {

    it('should be able to add zero to zero', function() {
      // setup for test (if necessary)

      // execute function
      var result = addTwoNumbers(0, 0)

      // assert what the result SHOULD be
      assert.equal(result, 0)
    })

    it('should be able to add 1 to 0', function() {
      // setup for test (if necessary)

      // execute function
      var result = addTwoNumbers(1, 0)

      // assert what the result SHOULD be
      assert.equal(result, 1)
    })

    it('should be able to add 1 to 1', function() {
      // setup for test (if necessary)

      // execute function
      var result = addTwoNumbers(1, 1)

      // assert what the result SHOULD be
      assert.equal(result, 2)
    })
  })

  describe('sayHello', function() {
    it('should be able to say hello to Leta', function() {
      // setup for test (if necessary)

      // execute function
      var result = sayHello('Leta')

      // assert what the result SHOULD be
      assert.equal(result, 'Hi there Leta!')
    })

    it('should be able to say hello to Casey', function() {
      // setup for test (if necessary)

      // execute function
      var result = sayHello('Casey')

      // assert what the result SHOULD be
      assert.equal(result, 'Hi there Casey!')
    })

    it('should not be able to say hello to Will', function() {
      // setup for test (if necessary)

      // execute function
      var result = sayHello('Will')

      // assert what the result SHOULD be
      assert.equal(result, 'No more testing Will!')
    })
  })

  describe('buildCar', function() {
    it('should return a car with a color', function() {
      // setup for test (if necessary)
      var color = 'red'

      // execute function
      var result = buildCar(color)

      // assert what the result SHOULD be
      assert.equal(result.color, color)
    })

    it('should return a car with a type', function() {
      // setup for test (if necessary)
      var color = 'red'
      var type = 'truck'

      // execute function
      var result = buildCar(color, type)

      // assert what the result SHOULD be
      assert.equal(result.type, type)
    })

    it('should return an empty object if there are no details passed', function() {
      // setup for test (if necessary)

      // execute function
      var result = buildCar()

      // assert what the result SHOULD be
      assert.deepEqual(result, {})
    })
  })
})
