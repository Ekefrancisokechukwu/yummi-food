import img from "../../assets/img/question.webp";
import SingleQuestion from "./SingleQuestion";
import { accordiondata } from "./accordiondata";

const Questions = () => {
  return (
    <section className=" flex items-center justify-center gap-14  px-[5rem] py-28 xs:flex-col-reverse mm:px-10">
      <div className="">
        {accordiondata.map((item) => {
          return <SingleQuestion key={item.id} {...item} />;
        })}
      </div>

      <div className="w-[23rem] mm:w-full">
        <img src={img} alt="" />
      </div>
    </section>
  );
};
export default Questions;
