import {AgeCalculator} from './../js/age-calculator.js';
// used for jasmine testing
// var AgeCalculator = require('./../js/age_calculator.js').ageModule;

describe('AgeCalculator', function() {
  var calculateAge;

  beforeEach(function() {
    calculateAge = new AgeCalculator()
  });

  it("returns age in seconds", function(){
    expect(calculateAge.ageSeconds(22)).toEqual(693792000)
  });

  it("returns dates difference in seconds", function(){
  expect(calculateAge.secondsByDates('10-13-2017', '11-02-1994')).toEqual(693792000)
  });
});
