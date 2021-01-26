import React from 'react'
import { Link } from 'wouter'

const Header = () => {
    const isLogged = false

    return (
        <header className="gf-header">
            {isLogged ? (
                <Link to="/login">Login</Link>
            ) : (
                <Link to="/logout">logout</Link>
            )}
        </header>
    )
}
export default Header
