import {AgeCalculator} from './../js/age_calculater.js';


describe('AgeCalculator', function(){
  let Calculator;
  beforeEach(function(){
  Calculator = new AgeCalculator(22)
  });


  it("should return age in years", function(){
    expect(Calculator.age).toEqual(22)
  });
});
