import React from 'react';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import loginSchema from '../../validationSchemas/login';
// CUSTOM HOOKS

// import Input from '../FormComponents/Input';
// import CheckBox from 'components/FormComponents/CheckBox';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="xs">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
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

        <Button
          disabled={!(formik.isValid && formik.dirty)}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Login
        </Button>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Go to Registration
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
