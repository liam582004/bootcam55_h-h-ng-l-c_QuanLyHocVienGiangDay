import Person from "../models/Person";
import Customer from "../models/Customer";
import Employee from "../models/Employee";
import Student from "../models/Student";
import ListPerson from "../models/ListPerson";

const listPerson = new ListPerson();
console.log(listPerson);

function getEle(id) {
  return document.getElementById(id);
}

getEle("type").onchange = () => {
  var key = getEle("type").value;

  switch (key) {
    case (key = "Student"):
      getEle("student_math").style.display = "block";
      getEle("student_physics").style.display = "block";
      getEle("student_chemistry").style.display = "block";
      getEle("employee_day").style.display = "none";
      getEle("employee_salary").style.display = "none";
      getEle("customer_company").style.display = "none";
      getEle("customer_bill").style.display = "none";
      getEle("customer_rate").style.display = "none";
      break;
    case (key = "Employee"):
      getEle("student_math").style.display = "none";
      getEle("student_physics").style.display = "none";
      getEle("student_chemistry").style.display = "none";
      getEle("employee_day").style.display = "block";
      getEle("employee_salary").style.display = "block";
      getEle("customer_company").style.display = "none";
      getEle("customer_bill").style.display = "none";
      getEle("customer_rate").style.display = "none";
      break;
    case (key = "Customer"):
      getEle("student_math").style.display = "none";
      getEle("student_physics").style.display = "none";
      getEle("student_chemistry").style.display = "none";
      getEle("employee_day").style.display = "none";
      getEle("employee_salary").style.display = "none";
      getEle("customer_company").style.display = "block";
      getEle("customer_bill").style.display = "block";
      getEle("customer_rate").style.display = "block";
      break;
    default:
      getEle("student_math").style.display = "none";
      getEle("student_physics").style.display = "none";
      getEle("student_chemistry").style.display = "none";
      getEle("employee_day").style.display = "none";
      getEle("employee_salary").style.display = "none";
      getEle("customer_company").style.display = "none";
      getEle("customer_bill").style.display = "none";
      getEle("customer_rate").style.display = "none";
      break;
  }
};

// function getInforSV() {
//   let name = getEle("name").value;
//   let address = getEle("address").value;
//   let code = getEle("code").value;
//   let email = getEle("email").value;
//   let math = getEle("toan").value;
//   let phys = getEle("ly").value;
//   let chem = getEle("hoa").value;

//   let sv = new Student(name, address, code, email, math, phys, chem);

//   sv.calcAvgScore();

//   return sv;
// }

// function themSV() {
//   let sv = getInforSV();

//   if (sv) {
//     renderList(listPerson.sv);
//   }
// }

// function renderList(data) {
//   const content = "";

//   for (let i = 0; i < data.length; i++) {
//     content += `
//   <tr>
//     <td>${sv.name}</td>
//     <td>${sv.address}</td>
//     <td>${sv.code}</td>
//     <td>${sv.email}</td>
//     <td>${sv.dtb}</td>

//   </tr>

//     `;
//   }
//   getEle("tableDanhSach").innerHTML = content;
// }
// //Validation
// function validate() {
//   let isCheck = true;

//   let hoTen = getEle("name").value;
//   const regexHasnumber = /\d/;
//   if (!hoTen.trim() && regexHasnumber.test(hoTen)) {
//     isCheck = false;
//     getEle("tbTen").innerHTML = "Tên không dược để trống và chứa số";
//     getEle("tbTen").style.display = "block";
//   } else {
//     getEle("tbTen").innerHTML = "";
//     getEle("tbTen").style.display = "none";
//   }
// }
