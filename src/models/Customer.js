import Person from "./Person";

export default class Customer extends Person {
  constructor(name, address, code, email, type, cty, bill, rate) {
    super(name, address, code, email, type);
    this.cty = cty;
    this.bill = bill;
    this.rate = rate;
  }
}
