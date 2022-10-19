import React from 'react'
import {UserContext, AgeContext} from '../ComponentContext'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
            {
                user => {
                    return(
                        <AgeContext.Consumer>
                            {
                                age => 
                                {
                                    return (<div> User Context value {user} ,Age Context value {age}</div>)
                                }
                            }
                        </AgeContext.Consumer>
                    )
                }
            }
            </UserContext.Consumer>
            
        </div>
    )
}

export default ComponentF
