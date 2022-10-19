import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{background: theme.primary.main,color: theme.primary.text}}>
            Theme cnontext
        </div>
    )
}

export default Box
