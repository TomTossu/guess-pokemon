import React, { useContext, useEffect, useState } from "react";

import data from "../../api";
import PokemonImage from "../PokemonImage/PokemonImage";
import GuessBox from "../GuessBox/GuessBox";
import { GuessContext } from "../../providers/GuessProvider";

function FormContainer() {
    const [pokemon, setPokemon] = useState({});
    const { guess } = useContext(GuessContext);
    const [result, setResult] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await data.random();

            setPokemon(response);
        }

        fetchData();
    }, []);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                if (guess?.toUpperCase() === pokemon?.name?.toUpperCase()) {
                    setResult(true);
                }
            }}
        >
            <PokemonImage imgToShow={result} pokemon={pokemon} />
            <GuessBox />
        </form>
    );
}

export default FormContainer;
