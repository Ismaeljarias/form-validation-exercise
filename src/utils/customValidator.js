export const emailValidation = (email) => {
  const re = RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/);

  return re.test(email);
};

export const phoneValidation = (phone) => {
  const re = RegExp(/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/);
  return re.test(phone);
};

export const urlValidation = (url) => {
  const re = RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
  );
  return re.test(url);
};

export const formValid = ({ formValues, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formValues).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};
