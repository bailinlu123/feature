import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchma = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchma}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              label="Email"
              name="email"
              type="email"
            />
            <FormikControl control="input" label="Password" name="password" type="password"/>
            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
