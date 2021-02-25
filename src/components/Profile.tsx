import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengesContext'
import styles from '../styles/components/Profile/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengeContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/jgbotelho3.png" alt="Jefferson Botelho"/>
            <div>
                <strong>Jefferson Botelho</strong>
                <p>
                    <img src="icons/level.svg" alt="level up icon"/>
                    Level {level}
                    </p>
            </div>
        </div>
    )
}