import React from 'react';
import { Formik, Form } from 'formik';
import registrationSchema from '../../utils/registrationSchema';
import Input from '../FormComponents/Input';
import CheckBox from 'components/FormComponents/CheckBox';

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
        <Input label="First-name" type="text" id="firstName" name="firstName" placeholder="" />
        <Input label="Last name" type="text" id="lastName" name="lastName" placeholder="" />
        <Input label="Email Address" type="email" id="email" name="email" placeholder="" />
        <Input label="Password" type="password" id="password" name="password" placeholder="" />
        <CheckBox name="acceptedTerms"> I accepted terms conditions</CheckBox>
        <button type="submit">Welcome</button>
        <button type="reset">Reset</button>
      </Form>
    </Formik>
  );
}
