import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: '',
  email: '',
  password: '',
});
