import { useEffect, useState } from "react";

function Clock() {
  const [sec, setSec] = useState<number>(new Date().getSeconds());
  const [min, setMin] = useState<number>(new Date().getMinutes());
  const [hour, setHour] = useState<number>(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setSec(now.getSeconds());
      setMin(now.getMinutes());
      setHour(now.getHours());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="lg:text-8xl sm:text-7xl text-5xl monospace">{`${String(
        hour
      ).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(
        sec
      ).padStart(2, "0")}`}</p>
    </div>
  );
}

export default Clock;
