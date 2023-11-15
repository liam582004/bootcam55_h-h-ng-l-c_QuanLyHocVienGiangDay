import ListPerson from '../models/ListPerson.js';
import { handleRender } from './handleRender.js';
import { $a, $all } from './shortElement.js';
// const listPerson = new ListPerson();
export const SortPerson = (listPerson) => {
  const SelectSort = $a('#SapXep').value;
  const newPerson = [...listPerson.persons];
  switch (SelectSort) {
    case 'Tang':
      //
      const arrPersonIncrease = newPerson.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      handleRender(arrPersonIncrease);
      break;
    case 'Giam':
      const arrPersonReduce = newPerson.sort((a, b) => {
        return b.name.localeCompare(a.name);
        //
      });
      handleRender(arrPersonReduce);
      break;
  }
};
