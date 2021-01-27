import { useAuth } from 'hooks/useAuth'
import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'wouter'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [_, navigate] = useLocation()
    const { isLogged, login } = useAuth()

    const form = useRef(null)

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = e => {
        e.preventDefault()

        login({ username, password })
    }

    return (
        <section>
            <form ref={form} onSubmit={handleSubmit}>
                <input
                    name="user"
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default Login
