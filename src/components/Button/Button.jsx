import React from 'react'

function Button({ children }) {

    return (
        <button className="nes-btn is-primary"> {children} </button>
    )
}

export default Button