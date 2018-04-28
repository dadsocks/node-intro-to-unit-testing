const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('Should return "fizz-buzz" if num is divisible by 3 and 5', function() {

    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 60, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('Should return "buzz" if num is divisible by 5', function() {

    const normalCases = [
      {num: 5, expected: 'buzz'},
      {num: 25, expected: 'buzz'},
      {num: 50, expected: 'buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('Should return "fizz" if num is divisible by 3', function() {

    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 18, expected: 'fizz'},
      {num: 21, expected: 'fizz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('Should raise error if not a num', function(input) {
    const badInputs = ['a','b',false,'4'];

    badInputs.forEach(function(input){
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
