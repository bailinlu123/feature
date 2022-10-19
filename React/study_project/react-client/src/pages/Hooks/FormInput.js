import React from 'react'
import useInput from './Hooks/useInput'

function FormInput() {
    const [firstname, bindFirstName, resetFristName] = useInput()
    const [secondname, bindSecondName, resetSecondName] = useInput()

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello ${firstname} ${secondname}`)
        resetFristName()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input {...bindFirstName} />
            <br />
            <input {...bindSecondName} />
            <br />
            <button type='submit'> Submit </button>
        </form>
    )
}

export default FormInput
