// import {AgeCalculator} from './../js/age_calculator.js';

var AgeCalculator = require('./../js/age_calculator.js').ageModule;

describe('AgeCalculator', function(){
  let Calculator;
  beforeEach(function(){
  Calculator = new AgeCalculator(22)
  });


  it("should return age in seconds", function(){
    expect(Calculator.ageSeconds(22)).toEqual(693792000)
  });
});
