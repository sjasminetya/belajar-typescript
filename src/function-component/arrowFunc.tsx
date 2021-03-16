import React, { FC, useState } from 'react'

type Props = {
    title: string
}

const ArrComp: FC<Props> = (props) => {

    const [counter, setCounter] = useState<number>(0)

    function tambah(param: number): void {
        setCounter(param + 1)
    }

    function kurang(param: number): void {
        setCounter(param - 1)
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => tambah(counter)}>tambah</button>
                <button onClick={kurang.bind(kurang, counter)}>kurang</button>
            </div>
        </div>
    )
}

export default ArrComp