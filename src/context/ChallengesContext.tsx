import {createContext, ReactNode, useState} from "react"
import challenges from '../challenges.json'

type ChallengeProps = {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

type ChallengeContextData = {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: ChallengeProps;
    startNewChallenge: () => void;
    levelUp: () => void;
    resetChallenge: () => void
}

type ChallengeProviderProps = {
    children: ReactNode;
}
export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({children}: ChallengeProviderProps ){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }
    return(
        <ChallengeContext.Provider value={{
            level,
            experienceToNextLevel,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            resetChallenge,
            activeChallenge,
        }}>
            {children}
        </ChallengeContext.Provider>
    )
}