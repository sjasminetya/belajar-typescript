import React, { PropsWithChildren } from 'react'

type Props = {
    title: string
}

function FunctionComp (props: PropsWithChildren<Props>): React.ReactElement {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default FunctionComp