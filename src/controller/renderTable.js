// import { $a, $all } from './shortElement.js';

// export function renderTable() {
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
//       ];
//       console.log(student);
//       let content = '';
//       content = student.reduce((prev, item, index) => {
//         return prev + `<th>${item.field}</th>`;
//       }, '');
//       $a('.table thead').innerHTML = content + orginalTH;

//     case 'nhanvien':
//       const employee = [{ field: 'So ngay lam viec' }, { field: 'Luong ngay' }];
//       content = employee.reduce((prev, item, index) => {
//         return prev + `<th>${item.field}</th>`;
//       }, '');
//       $a('.table thead').innerHTML = content + orginalTH;
//     case 'khachhang':
//       const customer = [
//         { field: 'Ten Cong Ty' },
//         { field: 'Gia tri hoa don' },
//         { field: 'Danh gia' },
//       ];
//       content = customer.reduce((prev, item, index) => {
//         return prev + `<th>${item.field}</th>`;
//       }, '');
//       $a('.table thead').innerHTML = content + orginalTH;
//     default:
//       $a('.table thead').innerHTML = orginalTH;
//   }
