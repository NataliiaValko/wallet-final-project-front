import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import userSchema from '../../validationSchemas/userSchema';

// CUSTOM HOOKS

// import Input from '../FormComponents/Input';
// import CheckBox from 'components/FormComponents/CheckBox';

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={userSchema}
      validateOnMount
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isValid }) => (
        <Form>
          <label>
            First Name
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />
          </label>

          <label>Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <label htmlFor="confirmPassword">Confirm password</label>
          <Field name="confirmPassword" type="password" />
          <ErrorMessage name="confirmPassword" />

          <label>
            I accepted terms conditions
            <Field name="acceptedTerms" type="checkbox" />
          </label>
          <ErrorMessage name="acceptedTerms" />

          <button disabled={!isValid} type="submit">
            Welcome
          </button>

          {/* WITH CUSTOM HOOKS  */}

          {/* <Input label="First-name" type="text" id="firstName" name="firstName" placeholder="" />
          <Input label="Last-name" type="text" id="lastName" name="lastName" placeholder="" />
          <Input label="Email Address" type="email" id="email" name="email" placeholder="" />
          <Input label="Password" type="password" id="password" name="password" placeholder="" />
          <Input
            label="Confirm password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder=""
          />
          <CheckBox name="acceptedTerms"> I accepted terms conditions</CheckBox> */}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
