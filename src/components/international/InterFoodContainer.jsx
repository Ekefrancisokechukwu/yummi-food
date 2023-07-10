import SingleInterFood, { SingleFoodRight } from "./SingleInterFood";
import { dataleft, dataright } from "./interData";
import middleimg from "../../assets/img/middle-img.webp";

export const InterFoodContainer = () => {
  return (
    <div className="mt-28   flex  justify-between  gap-7 xs:flex-wrap  tablet:mt-16 tablet:justify-center">
      <div className="">
        {dataleft.map((item, index) => {
          return <SingleInterFood key={index} {...item} />;
        })}
      </div>
      <div className=" w-[20rem]">
        <img src={middleimg} alt="" />
      </div>
      <div className="">
        {dataright.map((item, index) => {
          return <SingleFoodRight key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
