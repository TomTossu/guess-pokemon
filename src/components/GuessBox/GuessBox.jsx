import React, { useContext } from 'react'
import styles from './GuessBox.module.css'

import { GuessContext } from '../../providers/GuessProvider'

import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'



function GuessBox({ result }) {
    const { guess, setGuess } = useContext(GuessContext)

    return (
        <div className={`${styles.guessBoxWrapper} ${result ? styles.resetBtn : undefined}`}>

            {!result && <TextInput name={"guess"} value={guess} onChange={setGuess} />}

            {result ? <Button type={'is-error'}>Reset</Button> : <Button type={'is-primary'}>Guess</Button>}
        </div>
    )
}

export default GuessBox