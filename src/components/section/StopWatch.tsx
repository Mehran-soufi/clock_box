import { useState, useEffect } from "react";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIntervalId(id);
      return () => clearInterval(id);
    } else if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [isRunning]);

  const startHandler = () => {
    if (!isRunning) setIsRunning(true);
  };

  const pauseHandler = () => {
    setIsRunning(false);
  };

  const stopHandler = () => {
    setIsRunning(false);
    setTime(0);
  };

  const hour = Math.floor(time / 3600000);
  const min = Math.floor((time % 3600000) / 60000);
  const sec = Math.floor((time % 60000) / 1000);
  const mil = Math.floor((time % 1000) / 10);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-full h-9/12 flex justify-center items-center">
        <p className="lg:text-8xl sm:text-7xl text-4xl monospace">
          {`${String(hour).padStart(2, "0")}:${String(min).padStart(
            2,
            "0"
          )}:${String(sec).padStart(2, "0")}:${String(mil).padStart(2, "0")}`}
        </p>
      </div>
      <div className="w-full h-3/12 flex justify-center items-center gap-4">
        {!isRunning ? (
          <button
            className="lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 flex justify-center items-center rounded-full bg-zinc-800 shadow-inner shadow-zinc-600 cursor-pointer"
            onClick={startHandler}
          >
            <FaPlay />
          </button>
        ) : (
          <>
            <button
              className="lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 flex justify-center items-center cursor-pointer rounded-full bg-zinc-800 shadow-inner shadow-zinc-600"
              onClick={stopHandler}
            >
              <FaStop />
            </button>
            <button
              className="lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 flex justify-center items-center cursor-pointer rounded-full bg-zinc-800 shadow-inner shadow-zinc-600"
              onClick={pauseHandler}
            >
              <FaPause />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default StopWatch;
