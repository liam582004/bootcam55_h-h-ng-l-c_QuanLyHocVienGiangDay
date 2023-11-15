import { $a, $all } from './shortElement.js';
import { handleModal } from './handleChange.js';
import addPerson, { getPerson } from './addPerson.js';
import ListPerson from '../models/ListPerson.js';
import deletePerson from './deletePerson.js';
import { handleRender } from './handleRender.js';
import { getLocalStorage, setLocalStorage } from './localStorage.js';
import { getTypePerson } from './getTypePerson.js';
import { SortPerson } from './sortPersonOfName.js';

const listPerson = new ListPerson();
$a('#typePersonModal').addEventListener('change', handleModal);
$a('#btnAddPerson').addEventListener('click', () => {
  addPerson(listPerson);
  //
});

if (getLocalStorage() === null) {
  setLocalStorage(listPerson.persons);
}

listPerson.persons = getLocalStorage();

handleRender(listPerson.persons);
$a('#tableDanhSach').addEventListener('click', (event) => {
  const idEle = event.target.id;
  // console.log(event.target);
  let isButtonCreated = false;
  switch (idEle) {
    case 'deleteBtn':
      const personID = event.target.getAttribute('keyPerson');
      deletePerson(listPerson, personID);
      handleRender(listPerson.persons);
      setLocalStorage(listPerson.persons);
      Swal.fire({
        icon: 'success',
        title: 'Delete Susscess!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    case 'btnView':
      $a('#btnAddPerson').style.display = 'none';
      $a('#btnCapNhat').style.display = 'block';
      const id = event.target.getAttribute('keyPerson');
      const person = listPerson.persons.find((person) => {
        return person.ma === id;
      });

      // $a('#btnAddPerson').style.display = ' none';

      const typePerson = getTypePerson(person);
      let typePersonModal = $a('#typePersonModal');

      const { ma, name, email, address } = person;
      $a('#ID').value = ma;
      $a('#name').value = name;
      $a('#email').value = email;
      $a('#address').value = address;
      switch (typePerson) {
        case 'Student':
          autoSelectTypePerson('Student');
          handleModal();
          const { toan, ly, hoa } = person;
          $a('#diemToan').value = toan;
          $a('#diemLy').value = ly;
          $a('#diemHoa').value = hoa;
          // $a('btnTinhLuong').style.display = 'none';
          if (!isButtonCreated) {
            const button = document.createElement('button');
            button.classList.add('btn');
            button.classList.add('btn-success');
            button.type = 'button';
            button.id = 'btnDTB';
            button.textContent = 'Điểm Trung Bình';
            const modelFooter = $a('#modal-footer');
            if (modelFooter) {
              modelFooter.appendChild(button);
              isButtonCreated = true;
            } else {
              console.log('error');
            }
            // $a('#btnView').removeEventListener('click',handleClick)
          }
          // $a('btnTinhLuong').style.display = 'none';
          $a('#btnDTB').style.display = 'block';
          break;
        case 'Employee':
          autoSelectTypePerson('Employee');
          handleModal();
          const { workingDays, salaryDay } = person;
          $a('#workingDays').value = workingDays;
          $a('#salaryDay').value = salaryDay;
          if (!isButtonCreated) {
            const button = document.createElement('button');
            button.classList.add('btn');
            button.classList.add('btn-info');
            button.type = 'button';
            button.id = 'btnTinhLuong';
            button.textContent = 'total salary';
            const modelFooter = $a('#modal-footer');
            if (modelFooter) {
              modelFooter.appendChild(button);
              isButtonCreated = true;
            } else {
              console.log('error');
            }
            // $a('#btnView').removeEventListener('click',handleClick)
          }
          $a('btnTinhLuong').style.display = 'block';
          $a('#btnDTB').style.display = 'none';
          break;
        case 'Customer':
          autoSelectTypePerson('Customer');
          handleModal();
          const { companyName, valuation, review } = person;
          $a('#companyName').value = companyName;
          $a('#valuation').value = valuation;
          $a('#review').value = review;

          $a('#btnDTB').style.display = 'none';
          $a('btnTinhLuong').style.display = 'none';
          break;
      }
  }
});

//cap nhap
// $a('#btnCapNhat').style.display = 'block';
$a('#btnCapNhat').addEventListener('click', (event) => {
  const person = getPerson();
  if (person == false) return;
  listPerson.editPerson(person);
  handleRender(listPerson.persons);
  setLocalStorage(listPerson.persons);
  $a('#btnDong').click();
  Swal.fire({
    icon: 'success',
    title: ' Update Susscess!',
  });
});

$a('#SapXep').addEventListener('change', () => {
  SortPerson(listPerson);
  // handleRender(listPerson.persons);
});
function autoSelectTypePerson(type) {
  for (let i = 0; i < typePersonModal.options.length; i++) {
    if (typePersonModal.options[i].value === type) {
      typePersonModal.options[i].selected = true;
    }
  }
}

function resetForm() {
  const resetInput = $all('#resetForm input');

  const arrInput = [...resetInput];
  arrInput.map((input) => {
    input.value = '';
  });
}

$a('#btnThem').addEventListener('click', () => {
  $a('#btnAddPerson').style.display = 'block';
  $a('#btnCapNhat').style.display = 'none';
  resetForm();
});
$a('#btnDong').addEventListener('click', () => {
  const btnLuong = $a('#btnTinhLuong');
  if (btnLuong) {
    btnLuong.remove();
  } else {
    $a('#btnDTB').remove();
  }
});

$a('.modal').addEventListener('click', () => {
  const btnLuong = $a('#btnTinhLuong');
  if (btnLuong) {
    btnLuong.remove();
  } else {
    $a('#btnDTB').remove();
  }
});
