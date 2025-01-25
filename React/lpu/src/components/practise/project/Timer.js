import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

export default function Timer() {
  const [time, setTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [min, setMin] = useState("25");
  const [sec, setSec] = useState("00");
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const convertToMinSec = (decimalTime) => {
    const totalSeconds = Number.parseFloat(decimalTime) * 60;
    setMin(Number.parseInt(totalSeconds / 60).toString());
    setSec(Number.parseInt(totalSeconds % 60).toString());
  };

  const handleSet = () => {
    if (time) {
      setIsRunning(false);
      setIsBreak(false);
      convertToMinSec(time);
    }
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTime(25);
    setBreakTime(5);
    convertToMinSec(25);
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSec((prevSec) => {
          const prevSecNum = Number(prevSec);
          if (prevSecNum > 0) return (prevSecNum - 1).toString();

          if (Number(min) > 0) {
            setMin((prevMin) => (Number(prevMin) - 1).toString());
            return "59";
          }

          clearInterval(timer);
          setIsRunning(false);

          if (!isBreak) {
            alert("Work time over! Starting break time.");
            setIsBreak(true);
            convertToMinSec(breakTime);
            setIsRunning(true);
          } else {
            alert("Break time over! Timer stopped.");
          }
          return "00";
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, min, sec, isBreak, breakTime]);

  return (
    <div className={styles.container}>
      <div className={styles.timeDisplay}>
        {min.padStart(2, "0")}:{sec.padStart(2, "0")}
      </div>
      <div className={styles.status}>
        {isBreak ? "Break Time" : "Work Time"}
      </div>
      <button
        className={styles.button}
        onClick={handleStart}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        className={styles.button}
        onClick={handleStop}
        disabled={!isRunning}
      >
        Stop
      </button>
      <button className={styles.button} onClick={handleReset}>
        Reset
      </button>
      <br />
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Work Time (min)"
        className={styles.input}
      />
      <input
        type="number"
        value={breakTime}
        onChange={(e) => setBreakTime(e.target.value)}
        placeholder="Break Time (min)"
        className={styles.input}
      />
      <button className={styles.setButton} onClick={handleSet}>
        Set
      </button>
    </div>
  );
}