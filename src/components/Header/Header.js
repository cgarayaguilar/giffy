import React, { useContext } from 'react'
import { Link } from 'wouter'
import { useAuth } from 'hooks/useAuth'

const Header = () => {
    const { isLogged, logout } = useContext(useAuth)

    return (
        <header className="gf-header">
            {isLogged ? (
                <Link to="/login">Login</Link>
            ) : (
                <button onClick={logout}>logout</button>
            )}
        </header>
    )
}
export default Header
