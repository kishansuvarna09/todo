const isEmpty = (string) => {
  if (string.trim() === '') return true;
  else return false;
};

exports.validateLoginData = (data) => {
  const errors = {};
  if (isEmpty(data.email)) errors.email = 'Must not be empty';
  if (isEmpty(data.password)) errors.password = 'Must not be  empty';
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const isEmail = (email) => {
  const emailRegEx =
    // eslint-disable-next-line no-useless-escape, max-len
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

exports.validateSignUpData = (data) => {
  const errors = {};

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be valid email address';
  }

  if (isEmpty(data.firstName)) errors.firstName = 'Must not be empty';
  if (isEmpty(data.lastName)) errors.lastName = 'Must not be empty';
  if (isEmpty(data.phoneNumber)) errors.phoneNumber = 'Must not be empty';
  if (isEmpty(data.country)) errors.country = 'Must not be empty';

  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  // eslint-disable-next-line max-len
  if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passowrds must be the same';
  if (isEmpty(data.username)) errors.username = 'Must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
