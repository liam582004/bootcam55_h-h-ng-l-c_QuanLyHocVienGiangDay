import { $a, $all } from './shortElement.js';
export const checkEmpty = (value, message, notiID) => {
  if (value == '') {
    $a(notiID).innerHTML = message;
    $a(notiID).style.display = 'block';
    return false;
  } else {
    $a(notiID).innerHTML = '';
    $a(notiID).style.display = 'none';
    return true;
  }
};
export const checkEmail = (value, message, notiID) => {
  if (value == '') {
    return;
  } else {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(value)) {
      $a(notiID).innerHTML = message;
      $a(notiID).style.display = 'block';
      return false;
    } else {
      $a(notiID).innerHTML = '';
      $a(notiID).style.display = 'none';
      return true;
    }
  }
};
