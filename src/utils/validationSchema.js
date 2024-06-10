export const registerCustomerValidationSchema = {
  email: {
    notEmpty: {
      errorMessage: "Email cannot be empty",
    },
    isEmail: {
      errorMessage: "Must be a valid email address.",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
    isString: {
      errorMessage: "Password must be a string",
    },
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage:
        "Password must be min 3 characters and max 20 characters long",
    },
  },
  firstName: {
    notEmpty: {
      errorMessage: "firstName cannot be empty",
    },
    isString: {
      errorMessage: "firstName must be a string",
    },
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage:
        "firstName must be min 3 characters and max 20 characters long",
    },
  },
  lastName: {
    notEmpty: {
      errorMessage: "lastName cannot be empty",
    },
    isString: {
      errorMessage: "lastName must be a string",
    },
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage:
        "lastName must be min 3 characters and max 20 characters long",
    },
  },
  phoneNumer: {
    notEmpty: {
      errorMessage: "Phone Number cannot be empty",
    },
    isMobilePhone: {
      locale: "ne-NP",
      errorMessage: "Not a valid Phone number format",
    },
  },
  address: {
    notEmpty: {
      errorMessage: "Address cannot be empty",
    },
    isString: {
      errorMessage: "Address must be a string",
    },
  },
};
