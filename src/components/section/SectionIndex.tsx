import Clock from "./Clock";
import StopWatch from "./StopWatch";
import Timer from "./Timer";

function SectionIndex({ buttonValue }: { buttonValue: string }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {buttonValue == "clock" ? (
        <Clock />
      ) : buttonValue == "stopwatch" ? (
        <StopWatch />
      ) : buttonValue == "timer" ? (
        <Timer />
      ) : (
        <Clock />
      )}
    </div>
  );
}

export default SectionIndex;
