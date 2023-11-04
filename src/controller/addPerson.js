import { $a, $all } from './shortElement.js';
import Student from '../models/Student.js';
import Employee from '../models/Employee.js';
import Customer from '../models/Customer.js';
import { handleRender } from './handleRender.js';
import { setLocalStorage } from './localStorage.js';

import { checkEmpty, checkEmail } from './Validator.js';
export function getPerson() {
  let isValid = [];
  const selecValue = $a('#typePersonModal');
  let person = '';
  const id = $a('#ID').value;
  const name = $a('#name').value;
  const email = $a('#email').value;
  const address = $a('#address').value;
  isValid = [
    checkEmpty(id, 'Vui long nhap id', '#tbID'),
    checkEmpty(name, 'Vui long nhap name', '#tbName'),

    checkEmpty(email, 'Vui long nhap email', '#tbEmail'),
    checkEmail(email, 'Vui long nhap email hop le', '#tbEmail'),
    checkEmpty(address, 'Vui long nhap address', '#tbAddress'),
  ];

  switch (selecValue.value) {
    case 'Student':
      const diemToan = $a('#diemToan').value;
      const diemLy = $a('#diemLy').value;
      const diemHoa = $a('#diemHoa').value;
      isValid = [
        ...isValid,
        checkEmpty(diemToan, 'vui long nhap diemtoan', '#tbdiemToan'),
        //
        checkEmpty(diemLy, 'vui long nhap diemly', '#tbdiemLy'),
        //
        checkEmpty(diemHoa, 'vui long nhap diemhoa', '#tbdiemHoa'),
      ];

      const student = new Student(
        name,
        email,
        id,
        address,
        diemToan,
        diemLy,
        diemHoa
      );

      person = student;

      break;
    case 'Employee':
      const workingDays = $a('#workingDays').value;
      const salaryDay = $a('#salaryDay').value;
      isValid = [
        ...isValid,
        checkEmpty(workingDays, 'vui long nhap workingDays', '#tbworkingDays'),
        checkEmpty(salaryDay, 'vui long nhap luong ngay', '#tbsalaryDay'),
      ];
      const employee = new Employee(
        name,
        email,
        id,
        address,
        workingDays,
        salaryDay
      );
      person = employee;

      break;
    case 'Customer':
      const companyName = $a('#companyName').value;
      const valuation = $a('#valuation').value;
      const review = $a('#review').value;
      isValid = [
        ...isValid,
        //
        checkEmpty(companyName, 'vui long nhap ten cong ty', '#tbcompanyName'),
        //
        checkEmpty(valuation, 'vui long nhap gia tri', '#tbvaluation'),
        //
        checkEmpty(review, 'vui long nhap noi dung', '#tbreview'),
      ];
      const customer = new Customer(
        name,
        email,
        id,
        address,
        companyName,
        valuation,
        review
      );
      person = customer;

      break;
  }
  const status = isValid.find((status) => {
    return status === false;
  });
  if (status == false) {
    return false;
  } else {
    return person;
  }
}
export default function addPerson(listPerson) {
  let person = getPerson();
  if (person == false) {
    return;
  }
  listPerson.persons.push(person);
  console.log(listPerson.persons);
  handleRender(listPerson.persons);
  setLocalStorage(listPerson.persons);
  $a('#btnDong').click();
  Swal.fire({
    icon: 'success',
    title: ' Add Susscess!',
  });
}
