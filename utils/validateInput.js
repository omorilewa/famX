export const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (values.firstname.length > 15) {
    errors.firstname = 'Must be 15 characters or less';
  }
  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length > 15) {
    errors.lastname = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please, confirm your password';
  }
  if (!values.phoneNum) {
    errors.phoneNum = 'Phone Number is required';
  }
  return errors;
};
