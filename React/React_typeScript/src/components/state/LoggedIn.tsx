import React, { useState } from 'react'

const LoggedIn = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handleLogin = () => { setIsLogin(true) }
    const handleLogout = () => { setIsLogin(false) }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLogin ? 'Login' : 'Logout'}</div>
        </div>
    )
}

export default LoggedIn
