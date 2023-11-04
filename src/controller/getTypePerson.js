export const getTypePerson = (person) => {
  if ('toan' in person) {
    return 'Student';
  } else if ('workingDays' in person) {
    return 'Employee';
  } else if ('companyName' in person) {
    return 'Customer';
  }
};
