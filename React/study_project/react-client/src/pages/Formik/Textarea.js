import React from 'react'
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError"

function Textarea(props) {
    const {label, name, ...rest} = props
    return (
        <div >
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} as="textarea"></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    )
}

export default Textarea
