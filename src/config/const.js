// this will define the table col order
export const TableRowProps = [
  { title: 'First Name', field: 'firstName', type: 'numeric' },
  { title: 'Last Name', field: 'lastName', type: 'numeric' },
  { title: 'Email Address', field: 'email', type: 'numeric' },
  { title: 'Phone Number', field: 'phone', type: 'numeric' },
  { title: 'Gender', field: 'gender', type: 'numeric' },
  { title: 'Date of Birth', field: 'dob', type: 'numeric' },
  { title: 'Joined Date', field: 'joinedDate', type: 'numeric' },
]
export const FieldRules = {
  firstName: {
    required: 'First name is required',
    minLength: {
      value: 6,
      message: 'First name must be at least 6 characters',
    },
    maxLength: {
      value: 10,
      message: 'First name must be at most 10 characters',
    },
  },
  lastName: {
    required: 'Last name is required',
    minLength: {
      value: 6,
      message: 'Last name must be at least 6 characters',
    },
    maxLength: {
      value: 10,
      message: 'Last name must be at most 10 characters',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value:
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Invalid email format',
    },
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value:
        /^(?:\+65)?[689]\d{7}$/,
      message: 'Invalid phone number format',
    },
  },
  gender: {
    required: 'Gender is required',
  },
  dob: {
    required: 'Date of Birth is required',
    validate: (value) => {
      const today = new Date();
      const dob = new Date(value);
      return dob < today || 'Date of Birth must be in the past';
    },
  }
}