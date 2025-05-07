import { useEffect, useState } from "react";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      const id = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  }, [isRunning, totalSeconds]);

  const handleInputChange = (
    value: string,
    type: "hours" | "minutes" | "seconds"
  ) => {
    const num = parseInt(value);
    if (isNaN(num) || num < 0) return;

    const newTotalSeconds =
      (type === "hours" ? num : hours) * 3600 +
      (type === "minutes" ? num : minutes) * 60 +
      (type === "seconds" ? num : seconds);

    setTotalSeconds(newTotalSeconds);
  };

  const startHandler = () => {
    if (totalSeconds === 0) return;
    setIsRunning(true);
    setIsEditable(false);
  };

  const pauseHandler = () => {
    setIsRunning(false);
  };

  const stopHandler = () => {
    setIsRunning(false);
    setIsEditable(true);
    setTotalSeconds(0);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col p-4 overflow-hidden">
      <div className="w-full h-9/12 flex justify-center items-center">
        <div className="text-center flex gap-4 items-center">
          {["hours", "minutes", "seconds"].map((unit, idx) => (
            <div key={unit} className="flex items-center gap-1">
              <input
                type="number"
                disabled={!isEditable}
                min={0}
                className="lg:w-36 w-16 bg-transparent monospace lg:text-8xl sm:text-7xl text-4xl text-center font-mono outline-none border-b border-zinc-500"
                value={
                  unit === "hours"
                    ? String(hours).padStart(2, "0")
                    : unit === "minutes"
                    ? String(minutes).padStart(2, "0")
                    : String(seconds).padStart(2, "0")
                }
                onChange={(e) => handleInputChange(e.target.value, unit as any)}
              />
              {idx < 2 && <span className="lg:text-8xl sm:text-7xl text-4xl">:</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-3/12 flex justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-6">
          {!isRunning ? (
            <button
              onClick={startHandler}
              className="lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 cursor-pointer flex justify-center items-center rounded-full bg-zinc-800 text-white shadow-inner shadow-zinc-600"
            >
              <FaPlay />
            </button>
          ) : (
            <>
              <button
                onClick={stopHandler}
                className="lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 cursor-pointer flex justify-center items-center rounded-full bg-zinc-800 text-white shadow-inner shadow-zinc-600"
              >
                <FaStop />
              </button>
              <button
                onClick={pauseHandler}
                className="lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 cursor-pointer flex justify-center items-center rounded-full bg-zinc-800 text-white shadow-inner shadow-zinc-600"
              >
                <FaPause />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timer;
