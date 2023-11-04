import { $a, $all } from './shortElement.js';

export function handleModal() {
  const selecValue = $a('#typePersonModal');
  const fieldStudent = [
    { field: 'diemToan', label: 'Diem toan', icon: 'fa fa-star' },
    { field: 'diemLy', label: 'Diem ly', icon: 'fa fa-star' },
    { field: 'diemHoa', label: 'Diem hoa', icon: 'fa fa-star' },
  ];
  const fieldEmployee = [
    {
      field: 'workingDays',
      label: 'so ngay lam viec ',
      icon: 'fa fa-briefcase',
    },
    { field: 'salaryDay', label: 'Luong ngay', icon: 'fa fa-money' },
  ];
  const fieldCustomer = [
    { field: 'companyName', label: 'companyName', icon: 'fa fa-building' },
    { field: 'valuation', label: 'valuation', icon: 'fa fa-building' },
    { field: 'review', label: 'Danh gia', icon: 'fa fa-building' },
  ];

  let content = ' ';
  switch (selecValue.value) {
    case 'Student':
      content = fieldStudent.reduce((prev, { field, label, icon }) => {
        return prev + customerModal(field, label, icon);
      }, '');
      $a('#modalPerson').innerHTML = content;
      break;

    case 'Employee':
      content = fieldEmployee.reduce((prev, { field, label, icon }) => {
        return prev + customerModal(field, label, icon);
      }, '');
      $a('#modalPerson').innerHTML = content;
      break;

    case 'Customer':
      content = fieldCustomer.reduce((prev, { field, label, icon }) => {
        return prev + customerModal(field, label, icon);
      }, '');
      $a('#modalPerson').innerHTML = content;
      break;
    default:
      $a('#modalPerson').innerHTML = '';
      break;
  }
}
function customerModal(field, label, icon) {
  return `  <div class="form-group">
<div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text"><i class="${icon}"></i></span>
    </div>
    <input type="text" name="ID" id="${field}" class="form-control input-sm"
        placeholder="${label}">
</div>

<span class="sp-thongbao" id="tb${field}"></span>
</div>
`;
}
