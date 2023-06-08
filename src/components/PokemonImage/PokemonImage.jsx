import React from 'react'

import styles from './PokemonImage.module.css'

function PokemonImage({ pokemon, imgToShow }) {
    return (
        <img src={pokemon.image} className={`${styles.img} ${imgToShow && styles.reveal}`} />
    )
}

export default PokemonImage