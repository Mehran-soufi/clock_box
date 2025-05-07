import { useState } from "react";
import ButtonsIndex from "../buttons/ButtonsIndex";
import SectionIndex from "../section/SectionIndex";

import { FaClock, FaStopwatch } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";

export interface ButtonsType {
  icon: React.ReactElement;
  title: string;
}

export const buttons: ButtonsType[] = [
  {
    icon: <FaClock />,
    title: "clock",
  },
  {
    icon: <FaStopwatch />,
    title: "stopwatch",
  },
  {
    icon: <IoTimer />,
    title: "timer",
  },
];

function HomeIndex() {
  const [buttonValue, setButtonValue] = useState<string>("clock");
  return (
    <div className="w-11/12 sm:w-4/5 lg:w-3/5 h-4/5 rounded-xl shadow-lg shadow-zinc-800 border border-zinc-800">
      <div className="w-full h-10/12 flex justify-center items-center">
        <SectionIndex buttonValue={buttonValue} />
      </div>
      <div className="w-full h-2/12 flex justify-center items-center">
        <ButtonsIndex
          buttonValue={buttonValue}
          setButtonValue={setButtonValue}
        />
      </div>
    </div>
  );
}

export default HomeIndex;
