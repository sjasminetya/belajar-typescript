import React, { FC, useEffect, useState } from 'react'

type Props = {
    title: string
}

const ArrComp: FC<Props> = (props) => {

    const [counter, setCounter] = useState<number>(0)
    const [user, setUser] = useState<{firstName: string, lastName: string}>({
        firstName: '',
        lastName: ''
    })
    const changeString = JSON.stringify(user)

    function login() {
        setUser({
            firstName: 'shaula',
            lastName: 'jasminetya'
        })
    }

    function logout() {
        setUser({
            firstName: '',
            lastName: ''
        })
    }

    function tambah(param: number): void {
        setCounter(param + 1)
    }

    function kurang(param: number): void {
        setCounter(param - 1)
    }

    useEffect(() => {
        console.log('get data')
    }, [changeString])

    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{counter} {user.firstName} {user.lastName}</h1>
            {user.firstName !== '' && <DataUser />}
            <div>
                <button onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>
                <button onClick={() => tambah(counter)}>tambah</button>
                <button onClick={kurang.bind(kurang, counter)}>kurang</button>
            </div>
        </div>
    )
}

const DataUser: FC = () => {
    useEffect(() => {
        return () => {
            console.log('component ilang')
        }
    }, [])
    return (
        <div>
            Berhasil Login
        </div>
    )
}

export default ArrComp