import React from 'react'

type ContainerProps = {
    styles: React.CSSProperties
}

const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Txt content here
        </div>
    )
}

export default Container
