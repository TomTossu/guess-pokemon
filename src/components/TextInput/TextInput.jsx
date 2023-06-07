import React from 'react'


function TextInput({ name, value, onChange }) {

    return (
        <input id={`${name}-input`} value={value} type='text' className='nes-input' onChange={(event) => {
            onChange(event.target.value)
        }} />
    )
}

export default TextInput