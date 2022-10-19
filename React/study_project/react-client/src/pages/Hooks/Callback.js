import Button from './Callback/Button'
import Count from './Callback/Count'
import React, {useState,useCallback} from 'react'
import Title from './Callback/Title'


function Callback() {
    const [age, setAge] = useState(30)
    const [salary, setSalary] = useState(5000)
    
    const incrementAge = useCallback(() => {
        setAge(prev => prev + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(prev => prev + 500)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleCilck={incrementAge}> Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleCilck={incrementSalary}> Increment Salary</Button>
        </div>
    )
}

export default Callback
