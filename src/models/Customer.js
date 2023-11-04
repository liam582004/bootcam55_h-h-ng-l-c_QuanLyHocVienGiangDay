import Person from './Person.js';
export default class Customer extends Person {
  constructor(name, email, ma, address, companyName, valuation, review) {
    super(name, email, ma, address);
    this.companyName = companyName;
    this.valuation = valuation;
    this.review = review;
  }
}
