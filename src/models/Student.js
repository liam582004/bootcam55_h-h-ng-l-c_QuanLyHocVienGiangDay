import Person from './Person.js';
export default class Student extends Person {
  //
  constructor(name, email, ma, address, toan, ly, hoa) {
    super(name, email, ma, address);
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }
  diemTrungBinh() {
    let DTB = (Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3;
    return DTB.toFixed(2);
  }
}
