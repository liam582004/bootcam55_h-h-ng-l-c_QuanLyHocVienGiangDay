import Person from "./Person";

export default class Student extends Person {
  constructor(name, address, code, email, type, math, phys, chem) {
    super(name, address, code, email, type);
    this.math = math;
    this.phys = phys;
    this.chem = chem;
    this.score = 0;
  }

  calcAvgScore = () => {
    var avgScore =
      Number(this.math) + Number(this.phys) + Number(this.chem) / 3;
    this.score = avgScore.toFixed(2);
  };
}
