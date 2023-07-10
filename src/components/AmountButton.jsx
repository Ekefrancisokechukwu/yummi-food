import { BiPlus, BiMinus } from "react-icons/bi";

const AmountButton = ({ amount, increase, decrease }) => {
  return (
    <div className="flex w-fit items-center   border  border-gray-700  text-[1.1rem] capitalize">
      <button
        className="border-r border-gray-700 p-1 px-2 transition-colors duration-200 hover:bg-rose-700 hover:text-white"
        onClick={decrease}
      >
        <BiMinus />
      </button>
      <span className="  px-3"> {amount}</span>
      <button
        className="border-l border-gray-700 p-1 px-2 transition-colors duration-200 hover:bg-rose-700 hover:text-white"
        onClick={increase}
      >
        <BiPlus />
      </button>
    </div>
  );
};
export default AmountButton;
