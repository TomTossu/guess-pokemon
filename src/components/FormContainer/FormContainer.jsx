import React, { useContext, useEffect, useState } from "react";

import data from "../../api";
import PokemonImage from "../PokemonImage/PokemonImage";
import GuessBox from "../GuessBox/GuessBox";
import { GuessContext } from "../../providers/GuessProvider";
import { fetchData, validateGuess } from "../../utils/utils";
import Paragraph from "../Paragraph/Paragraph";

import styles from './FormContainer.module.css'

function FormContainer() {
    const [pokemon, setPokemon] = useState({});
    const [status, setStatus] = useState('idle')
    const [result, setResult] = useState(false);

    const [correctCount, setCorrectCount] = useState(0);
    const [mistakeCount, setMistakeCount] = useState(0);

    const { guess, setGuess } = useContext(GuessContext);

    useEffect(() => {
        const initialCorrect = localStorage.getItem("correct")
        const initialMistake = localStorage.getItem("mistake")

        if (initialCorrect) setCorrectCount(initialCorrect)
        if (initialMistake) setMistakeCount(initialMistake)

        fetchData(data, setGuess, setResult, setPokemon, setStatus);
    }, []);

    return (
        <form className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                if (!result) validateGuess(guess, pokemon, setGuess, setResult, setCorrectCount, setMistakeCount);
                if (result) {
                    fetchData(data, setGuess, setResult, setPokemon, setStatus);
                }
            }}
        >
            {status === 'success' && <PokemonImage imgToShow={result} pokemon={pokemon} />}
            <div className={styles.countBox}>
                <Paragraph type={"success"}>Correct Guesses {correctCount}</Paragraph>
                <Paragraph type={"error"}>Wrong Guesses {mistakeCount}</Paragraph>
            </div>

            <GuessBox result={result} />
        </form>
    );
}

export default FormContainer;
