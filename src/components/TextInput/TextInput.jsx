import React from "react";

function TextInput({ name, value, onChange }) {
    return (
        <div className="nes-field">
            <input
                id={`${name}-input`}
                className="nes-input"
                value={value}
                type="text"
                onChange={(event) => {
                    onChange(event.target.value);
                }}
            />
        </div>
    );
}

export default TextInput;
