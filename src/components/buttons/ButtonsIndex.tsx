import { buttons } from "../home/Index";

function ButtonsIndex({
  buttonValue,
  setButtonValue,
}: {
  buttonValue: string;
  setButtonValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="w-full h-full flex justify-center items-center gap-4 border-t border-zinc-800">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={`border-none outline-none cursor-pointer
         flex flex-col justify-center items-center lg:text-2xl sm:text-xl text-lg  ${
           buttonValue == btn.title ? "shadow-inner shadow-zinc-600" : "shadow-md shadow-zinc-800"
         } rounded-md sm:w-1/4 w-1/3
         transition duration-300 ease-linear hover:scale-95`}
          style={{ padding: ".5rem" }}
          onClick={() => setButtonValue(btn.title)}
        >
          {btn.icon}
          {btn.title}
        </button>
      ))}
    </div>
  );
}

export default ButtonsIndex;
