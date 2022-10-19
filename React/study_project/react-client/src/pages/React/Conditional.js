import React,{useState} from 'react'

function Conditional() {
    const[isLoggedIn, setIsLoggedIn] = useState(true)
    
    // return (
    //     // <div>
    //     //     <div>
    //     //         Welcome Haku
    //     //     </div>
    //     //     <div>
    //     //         Welcome Mike
    //     //     </div>
    //     // </div>
    // )

    // 1
    // if(isLoggedIn) {
    //     return <div>Welcome Haku</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }

    // 2
    // let message
    // if(isLoggedIn){
    //     message = <div>Welcome Haku</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // 3
    // return (
    //     isLoggedIn ?
    //     (<div>Welcome Haku</div>) :
    //     (<div>Welcome Guest</div>)
    // )

    // 4
    return (
        isLoggedIn && (<div>Welcome Haku</div>) 
    )
}

export default Conditional
