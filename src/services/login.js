const ENDPOINT = 'http://localhost:8000'

export const login = ({ username, password }) => {
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(res => {
            if (!res.ok) throw new Error('Response is NOT OK')
            return res.json()
        })
        .then(res => {
            const { jwt } = res

            return jwt
        })
}
