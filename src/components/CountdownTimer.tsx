import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CountdownTimer = () => {
  const INITIAL_TIME_WORK = 60 * 25;
  const INITIAL_TIME_BREAK = 60 * 5;
  const INITIAL_TIME_LONG_BREAK = 60 * 30;

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(INITIAL_TIME_WORK);
  const [phase, setPhase] = useState("work");
  const [round, setRound] = useState(1);

  useEffect(() => {
    let intervalId = null;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        if (timeRemaining === 0) {
          alert("Time's Complete!");
          if (phase === "work" && round < 4) {
            setPhase("break");
            setTimeRemaining(INITIAL_TIME_BREAK);
          } else if (phase === "work" && round === 4) {
            setPhase("long break");
            setRound((prevRound) => prevRound + 1);
            setTimeRemaining(INITIAL_TIME_LONG_BREAK);
          } else {
            setPhase("work");
            setRound((prevRound) => prevRound + 1);
            setTimeRemaining(INITIAL_TIME_WORK);
          }
          setIsTimerRunning(false);
        } else {
          setTimeRemaining(timeRemaining - 1);
        }
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTimerRunning, timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const onResetTimer = () => {
    if (isTimerRunning) {
      Swal.fire({
        text: "Are you sure you want to reset the timer?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Yes",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeRemaining(INITIAL_TIME_WORK);
          setIsTimerRunning(false);
          setRound(1);
        }
      });
    }
  };

  return (
    <div className="timer-container h-[50vh] flex justify-center items-center flex-col lg:h-[80vh]">
      <div className="timer-box flex justify-center items-center gap-5">
        <h1 className="font-bold text-8xl text-center">
          {minutes < 10 ? `0${minutes}` : minutes}
        </h1>
        <h1 className="font-bold text-8xl text-center">:</h1>
        <h1 className="font-bold text-8xl text-center">
          {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
      <h3 className="my-4 text-lg font-semibold text-slate-500">
        🧑🏻‍💻 Phase : <span className="uppercase text-black">{phase}</span>
        <span className="mx-4 text-slate-300"></span>
        🔂 Session : <span className="uppercase text-black">{round}</span>
      </h3>
      <div className="flex justify-center items-center gap-2">
        <button
          disabled={isTimerRunning}
          title="Start time"
          className={`text-xs font-semibold border border-black text-black px-8 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white active:bg-white active:text-black disabled:border-slate-400 disabled:text-slate-400 disabled:pointer-events-none`}
          onClick={() => setIsTimerRunning(true)}
        >
          Start
        </button>
        <button
          onClick={onResetTimer}
          title="Reset time"
          className="text-xs bg-black text-white px-8 py-2 rounded-md transition duration-100 hover:bg-red-500 hover:outline-none active:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
