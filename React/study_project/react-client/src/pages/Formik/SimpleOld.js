import React from "react";
import { Formik, useFormik } from "formik";

function SimpleOld() {
  // attribute  name
  const initialValues = {
    name: "",
    email: "",
    channels: "",
  };

  const onSubmit = (values) => {
    console.log("For data", values);
  };

  const validate = (values) => {
    // values.name value.email values.channeks
    // errors.name errors.email errors.channeks
    // errors.name = string
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(
        values.email
      )
    ) {
      errors.email = "Invalid email format";
    }

    if (!values.channels) {
      errors.channels = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

//   console.log("Form value", formik.values);
//   console.log("Form value", formik.values);
  console.log("Visited firlds", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>yarn add formik</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {(formik.touched.name && formik.errors.name) || <div style={{color:"red"}}>{formik.errors.name}</div>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        { (formik.touched.email && formik.errors.email) || <div style={{color:"red"}}>{formik.errors.email}</div>}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channels"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channels}
        />
        {(formik.touched.channels && formik.errors.channels) || <div style={{color:"red"}}>{formik.errors.channels}</div>}

        <br />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}

export default SimpleOld;
