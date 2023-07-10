import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Miniheader = () => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 bg-yellow-500 px-16 py-3">
      <ul className="flex flex-wrap items-center gap-3">
        <li>
          <a href="" className="flex items-center gap-2 hover:text-red-700">
            {" "}
            <BsTelephoneFill />
            <span>0000 - 123456789</span>
          </a>
        </li>
        <li>
          <a href="" className="flex items-center gap-2 hover:text-red-700">
            {" "}
            <MdEmail />
            <span>sample@example.com</span>
          </a>
        </li>
      </ul>
      <div className="">
        <select
          name=""
          id=""
          className="cursor-pointer bg-black px-1 py-1 text-white transition hover:text-yellow-500"
        >
          <option value="us">US</option>
          <option value="Gb">GB</option>
          <option value="Gb">GB</option>
          <option value="Gb">GB</option>
        </select>
      </div>
    </header>
  );
};
export default Miniheader;
