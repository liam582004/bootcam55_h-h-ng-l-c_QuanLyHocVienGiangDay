export default class ListPerson {
  constructor() {
    this.persons = [];
  }
  editPerson(personNew) {
    const index = this.persons.findIndex((person) => {
      return person.ma == personNew.ma;
    });
    this.persons[index] = personNew;
  }
  deletePerson(id) {
    const index = this.persons.findIndex((person) => {
      return person.ma === id;
    });
    this.persons.splice(index, 1);
  }
}
