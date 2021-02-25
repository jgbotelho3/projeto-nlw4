import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengeContext } from "./ChallengesContext";

type CountdownContextData = {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
};

type CountdownProviderProps = {
  children: ReactNode;
};

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const { startNewChallenge } = useContext(ChallengeContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  let countdownTimeout: NodeJS.Timeout;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
