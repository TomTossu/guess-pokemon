import React, { useContext } from 'react'
import styles from './GuessBox.module.css'

import { GuessContext } from '../../providers/GuessProvider'

import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'



function GuessBox() {
    const { guess, setGuess } = useContext(GuessContext)

    return (
        <div className={styles.guessBoxWrapper}>
            <TextInput name={"guess"} value={guess} onChange={setGuess}></TextInput>
            <Button>Guess</Button>
        </div>
    )
}

export default GuessBox