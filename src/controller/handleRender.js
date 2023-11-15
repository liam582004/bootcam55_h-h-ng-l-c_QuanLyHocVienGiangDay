// import ListPerson from '../models/ListPerson.js';
import { $a, $all } from './shortElement.js';
export function handleRender(arr) {
  const content = arr.reduce((prev, item, index) => {
    return (
      prev +
      ` <tr>
    <td>${index + 1}</td>
    <td>${item.ma}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.address}</td>
    <td>
    <button class="btn btn-danger" id="deleteBtn" keyPerson="${
      item.ma
    }" >Delete</button>
    <button class="btn btn-success" id="btnView" data-toggle="modal" data-target="#myModal" keyPerson="${
      item.ma
    }" >View</button>
    
    </td> 
    </tr>`
    );
  }, '');
  $a('#tableDanhSach').innerHTML = content;
}
