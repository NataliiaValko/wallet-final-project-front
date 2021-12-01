import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('This field is required'),
  lastName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('This field is required'),
  email: Yup.string()
    .email('Email is invalid,please try again')
    .required('Email is required,please type your email'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters or more ')
    .max(20, 'Password must be 20 characters or less')
    .required('Password is required field'),
});

export default registrationSchema;
