import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import registrationSchema from '../../utils/registrationSchema';

export default function RegisterForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={registrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="First name<">First name</label>
        <Field type="text" id="firstName" name="firstName" />
        <ErrorMessage name="firstName" />

        <label htmlFor="Last name">Last name</label>
        <Field type="text" id="lastName" name="lastName" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" />

        <button type="submit">Welcome</button>
      </Form>
    </Formik>
  );
}
