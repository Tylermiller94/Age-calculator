export class AgeCalculator {
  constructor(age){
    this.age = age
  }

  ageSeconds(age) {
    return age * 31536000;
  }

  secondsByDates(mostCurentDate, otherDate){
    let date1 = new Date(mostCurentDate);
    let date2 = new Date(otherDate);
    let difference = date1.getUTCFullYear() - date2.getUTCFullYear();
    return this.ageSeconds(difference);
  }

  lifeExpectancy(age, lifeExpectancy)
    return gender - age;
  //on click funtion to associate values with gender
  //funtion to take life expectancy age and subtract current age
  //return difference

  yearsOnMercury(age){
    return age * 4;
    // let earthDays = 365 * age;
    // return parseInt(earthDays / 88);
  }

  yearsOnVenus(age){
    let earthDays = 365 * age;
    return parseInt(earthDays / 243);
  }

  yearsOnMars(age){
    return age * 2;
    // let earthDays = 365 * age;
    // return parseInt(earthDays / 686)
  }

  yearsOnJupiter(age){
    return age * 12;
  }
}


 //
 // if male
 //  return age + 0
 //  else {
 //    return age + 5
 //  }



// // interface .js with a button click function
//   let gender = $('name=race').val




// //
// // for testing jasmine
// exports.ageModule = AgeCalculator;
