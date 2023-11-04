import Person from './Person.js';
export default class Student extends Person {
  //
  constructor(name, email, ma, address, toan, ly, hoa) {
    super(name, email, ma, address);
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }
}
// const renderTable = () => {
//   const typePerson = $a('#typeFromSelect');
//   const orginalTH = `	<tr>
//   <th class="nowrap">
//     <span class="mr-1">STT</span>
//     <i class="fa fa-arrow-up" id="SapXepTang"></i>
//     <i class="fa fa-arrow-down" id="SapXepGiam"></i>
//   </th>
//   <th>ID</th>
//   <th>Họ và tên</th>
//   <th>Email</th>
//   <th>Dia chi</th>
//   <th><em class="fa fa-cog"></em> <br>
//   Action</th>
//   `;
//   switch (typePerson.value) {
//     case 'sinhvien':
//       const student = [
//         { field: 'DiemToan' },
//         { field: 'DiemLy' },
//         { field: 'DiemHoa' },
//         { field: 'Diem Trung Binh' },
//         { field: ' <em class="fa fa-cog"></em> ' },
//       ];

//       let content = '';
//       content = student.reduce((prev, item, index) => {
//         return (
//           prev +
//           `<th>${item.field}</th>
//         </tr>`
//         );
//       }, '');

//       $a('#table thead').innerHTML = orginalTH + content;
//       const renderPeson = (arr) => {
//         const content = arr.reduce((prev, item, index) => {
//           return (
//             prev +
//             ` <tr>
//                     <td>${index + 1}</td>
//                     <td>${item.name}</td>
//                     <td>${item.email}</td>
//                     <td>${item.ma}</td>
//                     <td>${item.address}</td>
//                     <td>${item.toan}</td>
//                     <td>${item.ly}</td>
//                     <td>${item.hoa}</td>
//                  </tr>`
//           );
//         }, '');
//         $a('#tableDanhSach').innerHTML = content;
//       };
//   }
// };
// $a('.text-primary').addEventListener('change', renderTable);
