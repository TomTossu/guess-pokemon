import React from 'react'

function Paragraph({ children, type }) {
    return (
        <p class={`nes-text is-${type}`}> {children}</p >
    )
}

export default Paragraph