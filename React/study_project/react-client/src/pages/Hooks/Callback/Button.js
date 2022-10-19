import React,{memo} from 'react'

function Button(props) 
{
    const {handleCilck, children} = props
    console.log(`Render buton - ${children}`)
    return (
        <div>
            <button onClick={handleCilck}>
                {children}
            </button>
        </div>
    )
}

export default memo(Button)
