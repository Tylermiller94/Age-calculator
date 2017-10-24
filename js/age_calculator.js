class AgeCalculator {
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

  yearsOnMercury(age){
    let earthDays = 365 * age;
    return parseInt(earthDays / 88);
  }

  yearsOnVenus(age){
    let earthDays = 365 * age;
    return parseInt(earthDays / 243);
  }

  yearsOnMars(age){
    let earthDays = 365 * age;
    return parseInt(earthDays / 686)
  }
}



//
// for testing jasmine
// exports.ageModule = AgeCalculator;
