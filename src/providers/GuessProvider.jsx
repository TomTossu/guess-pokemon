import React, { createContext, useState } from 'react'

export const GuessContext = createContext();

function GuessProvider({ children }) {
    const [guess, setGuess] = useState("");

    return (
        <GuessContext.Provider value={{ guess, setGuess }}>{children}</GuessContext.Provider>
    )
}

export default GuessProvider