import React, { FC, useEffect, useState } from 'react'

type Props = {
    title: string
}

type State = {
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
}

const FetchData: FC<Props> = (props) => {
    const [user, setUser] = useState<State>({
        first_name: '',
        last_name: '',
        email: '',
        avatar: ''
    })

    const [loading, setLoading] = useState(false)

    async function login() {
        setLoading(true)
        try {
            const login = await (await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                })
            })).json()

            console.log(login)
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    
    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await (await fetch('https://reqres.in/api/users/2')).json()
                setUser({...data.data})
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])

    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <img src={user.avatar} alt=""/>
                <h3>Firstname: {user.first_name}</h3>
                <h3>Lastname: {user.last_name}</h3>
                <h3>Email: {user.email}</h3>
            </div>
            <div>
                <button onClick={login}>{loading ? 'Loading...' : 'Login'}</button>
            </div>
        </div>
    )
}

export default FetchData