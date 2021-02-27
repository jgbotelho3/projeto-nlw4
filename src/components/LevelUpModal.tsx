import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengesContext'
import styles from '../styles/components/LevelUpModal/LevelUpModal.module.css'


export function LevelUpModal(){

    const {level, closeModalLevelUp} = useContext(ChallengeContext)
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button" onClick={closeModalLevelUp}>
                    <img src="/icons/close.svg" alt="close modal"/>
                </button>
            </div>
        </div>
    )
}