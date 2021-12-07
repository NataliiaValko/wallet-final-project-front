import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less'),
  lastName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less'),
  email: Yup.string()
    .email('Email is invalid,please try again')
    .required('Email is required,please type your email'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters or more ')
    .max(20, 'Password must be 20 characters or less')
    .required('Password is required field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords must match')
    .required('Confirm password is required field'),

  acceptedTerms: Yup.boolean()
    .required('Accept the terms of conditions is required')
    .oneOf([true], 'You must accept the terms of conditions'),
});

export default userSchema;
