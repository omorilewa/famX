export const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords don\'t match';
  }
  if (!values.phoneNum) {
    errors.phoneNum = 'Phone Number is required';
  }
  return errors;
};

export const validateFamilyFields = (values) => {
  const errors = {};
  if (!values.enterFamily) {
    errors.enterFamily = 'Enter a family name';
  }
  if (!values.email) {
    errors.email = 'Please, enter an email address';
  }
  if (!values.picker) {
    errors.picker = 'Please, select a role!';
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
