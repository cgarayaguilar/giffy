import { useContext, useCallback } from 'react'
import { UserContext } from 'Context/UserContext'
import { login as loginService } from 'services/login'

export const useAuth = () => {
    const { jwt, setJwt } = useContext(UserContext)

    const login = useCallback(
        ({ username, password }) => {
            loginService({ username, password })
                .then(jwt => {
                    setJwt(jwt)
                })
                .catch(err => {
                    console.error(err)
                })
            //Cambiar el token
        },
        [setJwt]
    )

    const logout = useCallback(() => {
        //Cambiar el token
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        login,
        logout,
    }
}
