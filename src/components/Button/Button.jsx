import React from 'react'

function Button({ children, type }) {

    return (
        <button className={`nes-btn ${type}`} > {children} </ button>
    )
}

export default Button