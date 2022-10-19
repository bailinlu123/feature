import React,{useState} from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
  useFormik,
} from "formik";
import TextError from "./TextError";

function Simple() {
  // attribute  name
  const [formVaules, setFormVaules] = useState(null)

  const initialValues = {
    name: "haku rinro",
    email: "",
    channels: "",
    comment: "",
    adress: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phonesNumbers: ["", ""],
    pNumbers: [""],
  };

  const saveValues = {
    name: "haku",
    email: "96114@qq.com",
    channels: "china",
    comment: "welcom formik",
    adress: "4-9-710",
    social: {
      facebook: "",
      twitter: "",
    },
    phonesNumbers: ["", ""],
    pNumbers: [""],
  };

  const onSubmit = (values,onSubmitProps) => {
    // console.log("For data", values);
    console.log("SubmitProps", onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
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

    // if (!values.comment) {
    //   errors.comment = "Required"
    // }
    return errors;
  };

  const validateComments = (values) => {
    let error;
    if (!values) {
      error = "Required";
    }
    return error;
  };

  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validate,
  //   });

  //   console.log("Form value", formik.values);
  //   console.log("Form value", formik.values);
  //   console.log("Visited firlds", formik.touched);

  return (
    <Formik
      initialValues={formVaules || initialValues}
      validate={validate}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize
    //   validateOnMount={true}
    >
      {(formik) => {
        console.log("Formik", formik);
        return (
          <Form>
            <h1>yarn add formik</h1>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />

            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email">
              {(errorMsg) => <div style={{ color: "skyblue" }}>{errorMsg}</div>}
            </ErrorMessage>

            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channels" />
            <ErrorMessage name="channels" />

            <br />
            {/* <button
              type="button"
              onClick={() => formik.validateField("comment")}
            >
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comment")}
            >
              Visit comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  comment: true,
                  adress: true,
                })
              }
            >
              Visit fields
            </button> */}
            {/* change initialize values formik.dirty=true, else false */}
            {/* <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Visit fields</button> */}
            <button type="button" onClick={() => setFormVaules(saveValues)}>Load save data</button>
            <button type="reset">Reset</button>
            <button type="submit" disabled={!(formik.dirty && formik.isValid)}>Sumbit</button>

            <div>
              <label htmlFor="comment">Comments</label>
              {/* accept as props to decide what element to render */}
              <Field
                id="comment"
                name="comment"
                as="textarea"
                validate={validateComments}
              />
              <ErrorMessage name="comment" component={TextError} />
            </div>

            <div>
              <label htmlFor="adress">Adress</label>
              <FastField name="adress">
                {(props) => {
                  //   console.log("props", props);
                  const { field, form, meta } = props;
                  console.log("Field render");
                  return (
                    <div>
                      <input id="adress" {...field}></input>
                      {meta.touched && meta.error && <div>{meta.error}</div>}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div>
              <label htmlFor="faceboot">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook"></Field>
            </div>

            <div>
              <label htmlFor="twitter">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter"></Field>
            </div>

            <div>
              <label htmlFor="twitter">Primary phone number</label>
              <Field type="text" id="primary" name="phonesNumbers[0]"></Field>
            </div>

            <div>
              <label htmlFor="twitter">Secondaryph phone number</label>
              <Field
                type="text"
                id="secondaryph"
                name="phonesNumbers[1]"
              ></Field>
            </div>

            <div>
              <label htmlFor="">List of phone numners</label>
              <FieldArray name="pNumbers">
                {(fieldArrayProps) => {
                  //   console.log("fieldArrayProps", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { pNumbers } = values;
                  console.log("Form errors", form.errors);
                  return (
                    <div>
                      {pNumbers.map((pNumber, index) => {
                        return (
                          <div key={index}>
                            <Field name={`pNumbers[${index}]`}></Field>
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                -
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                push();
                              }}
                            >
                              +
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Simple;
