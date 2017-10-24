import { AgeCalculater } from './../js/age_calculator.js';

$(document).ready(function(){
  $('.age-form').submit(function(e){
    event.preventDefault();
    const ageInput = parseInt($('input#age').val());
    const ageCalculater = new AgeCalculater();

    $('.earth-seconds').text(ageCalculater.secondsOnEarth(ageInput));

    $('.mercury-years').text(ageCalculater.yearsOnMercury(ageInput));

    $('.venus-years').text(ageCalculater.yearsOnVenus(ageInput));

    $('.mars-years').text(ageCalculater.yearsOnMars(ageInput));
  });
});
