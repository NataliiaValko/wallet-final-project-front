import React from 'react';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import userSchema from '../../validationSchemas/userSchema';
import { makeStyles } from '@mui/styles';
import { useCreateUserMutation } from '../../redux/service/auth/registration';
// CUSTOM HOOKS

// import Input from '../FormComponents/Input';
// import CheckBox from 'components/FormComponents/CheckBox';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
    marginBottom: 40,
    display: 'block',
  },
});

const RegisterForm = () => {
  const [createUser] = useCreateUserMutation();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptedTerms: '',
    },
    validationSchema: userSchema,
    onSubmit: values => {
      createUser(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="xs">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.root}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          required
        />

        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <FormControlLabel
          control={
            <Checkbox
              id="acceptedTerms"
              name="acceptedTerms"
              value={formik.values.acceptedTerms}
              onChange={formik.handleChange}
              error={formik.touched.acceptedTerms && Boolean(formik.errors.acceptedTerms)}
            />
          }
          label="Accepted Terms"
        ></FormControlLabel>
        <Button
          disabled={!(formik.isValid && formik.dirty)}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

// const RegisterForm = () => {
//   return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         acceptedTerms: '',
//       }}
//       validationSchema={userSchema}
//       validateOnMount
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isValid }) => (
//         <Form>
//           <label>
//             First Name
//             <Field name="firstName" type="text" />
//             <ErrorMessage name="firstName" />
//           </label>

//           <label>Last Name</label>
//           <Field name="lastName" type="text" />
//           <ErrorMessage name="lastName" />

//           <label htmlFor="email">Email Address</label>
//           <Field name="email" type="email" />
//           <ErrorMessage name="email" />

//           <label htmlFor="password">Password</label>
//           <Field name="password" type="password" />
//           <ErrorMessage name="password" />

//           <label htmlFor="confirmPassword">Confirm password</label>
//           <Field name="confirmPassword" type="password" />
//           <ErrorMessage name="confirmPassword" />

//           <label>
//             <a href="#">I accepted terms conditions</a>
//             <Field name="acceptedTerms" type="checkbox" />
//           </label>
//           <ErrorMessage name="acceptedTerms" />

//           <button disabled={!isValid} type="submit">
//             register
//           </button>

//           <button type="submit">Login</button>

//           <button type="submit">Login with Google</button>

//           {/* WITH CUSTOM HOOKS  */}

//           {/* <Input label="First-name" type="text" id="firstName" name="firstName" placeholder="" />
//           <Input label="Last-name" type="text" id="lastName" name="lastName" placeholder="" />
//           <Input label="Email Address" type="email" id="email" name="email" placeholder="" />
//           <Input label="Password" type="password" id="password" name="password" placeholder="" />
//           <Input
//             label="Confirm password"
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder=""
//           />
//           <CheckBox name="acceptedTerms"> I accepted terms conditions</CheckBox> */}
//         </Form>
//       )}
//     </Formik>
//   );
// };

export default RegisterForm;
