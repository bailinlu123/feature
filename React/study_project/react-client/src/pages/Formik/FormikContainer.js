import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropDownOptions = [
    { key: "select an option", value: "" },
    { key: "option 1", value: "Option1" },
    { key: "option 2", value: "Option2" },
    { key: "option 3", value: "Option3" },
  ];

  const radioOptions = [
    { key: "option 1", value: "RadioOption1" },
    { key: "option 2", value: "RadioOption2" },
    { key: "option 3", value: "RadioOption3" },
  ];

  const checkOptions = [
    { key: "option 1", value: "CheckOption1" },
    { key: "option 2", value: "CheckOption2" },
    { key: "option 3", value: "CheckOption3" },
  ];

  const initialValuse = {
    email: "",
    describe: "",
    selectOption: "",
    radioOption: "",
    checkOption: [],
    birthDate: "",
  };

  const validateSchema = Yup.object({
    email: Yup.string().required("Required"),
    describe: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkOption: Yup.array().min(1, "Required"),
    birthDate: Yup.date().required("Required"),
  });

  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValuse}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        // return (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl control="textarea" label="Describe" name="describe" />
          <FormikControl
            control="select"
            label="SelectOption"
            name="selectOption"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="CheckBox topic"
            name="checkOption"
            options={checkOptions}
          />
          <FormikControl control="date" label="Pick day" name="birthDate" />
          <button type="submit">Submit</button>
        </Form>
        // );
      )}
    </Formik>
  );
}

export default FormikContainer;
