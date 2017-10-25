import { AgeCalculator } from './../js/age-calculator.js';

$(document).ready(function(){
  $('.age-form').submit(function(e){
    event.preventDefault();
    const ageInput = parseInt($('input#age').val());
    const ageCalculator = new AgeCalculator();
    $('.earth-seconds').text(ageCalculator.ageSeconds(ageInput));
    $('.mercury-years').text(ageCalculator.yearsOnMercury(ageInput));
    $('.venus-years').text(ageCalculator.yearsOnVenus(ageInput));
    $('.mars-years').text(ageCalculator.yearsOnMars(ageInput));
    $('.jupiter-years').text(ageCalculator.yearsOnJupiter(ageInput));
    $('.life-expectancy').text(ageCalculator.lifeExpectancy(ageinput));
  });
});
