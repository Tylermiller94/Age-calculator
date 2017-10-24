import {AgeCalculator} from './../js/age_calculator.js';
// used for jasmine testing
// var AgeCalculator = require('./../js/age_calculator.js').ageModule;

describe('AgeCalculator', function() {
  var calculateAge;

  beforeEach(function() {
    calculateAge = new AgeCalculator()
  });

  it("should return age in seconds", function(){
    expect(Calculator.ageSeconds(22)).toEqual(693792000)
  });

  it("should return dates difference in seconds", function(){
  expect(calculateAge.secondsByDates('10-13-2017', '11-02-1994')).toEqual(693792000)
  });
});
