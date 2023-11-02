import Person from "./Person";

export default class Employee extends Person {
  constructor(name, address, code, email, type, workDay, salary) {
    super(name, address, code, email, type);
    this.workDay = workDay;
    this.salary = salary;
    this.totalOfSalary = 0;
  }
  calcSalary() {
    this.totalOfSalary = Number(this.workDay) * Number(this.salary);
  }
}
