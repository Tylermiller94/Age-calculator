class AgeCalculator {
  constructor(age){
    this.age = age
  }

 ageSeconds(age) {
  return age * 31536000;
 }
}





exports.ageModule = AgeCalculator;
