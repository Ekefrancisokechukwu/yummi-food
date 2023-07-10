import img1 from "../../assets/img/img-1.webp";
import SingleStory from "./SingleStory";
import { data } from "./StoryData";

const Story = () => {
  return (
    <section className="flex gap-8 bg-[url(https://www.pngkit.com/png/full/22-228568_tear-clipart-torn-piece-paper-torn-paper-edges.png)] bg-cover px-[15rem] py-[10.5rem] lg:px-[2rem] tablet:flex-col  sm:px-6">
      <div className="h-[37rem] w-[37rem] tablet:w-auto">
        <img src={img1} alt="img" />
      </div>
      <div className="">
        <h1 className="heading-primary"> what makes our menus special</h1>

        {data.map((item, index) => {
          return <SingleStory key={index} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Story;
