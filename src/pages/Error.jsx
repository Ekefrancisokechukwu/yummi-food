// import { useRouteError } from "react-router-dom";
import img from "../assets/img/not-found.svg";

const Error = () => {
  // const error = useRouteError();
  // console.log(error);

  return (
    <section className="grid place-items-center text-center">
      <div className="w-[35rem]">
        <img src={img} alt="" />
      </div>
    </section>
  );
};
export default Error;
