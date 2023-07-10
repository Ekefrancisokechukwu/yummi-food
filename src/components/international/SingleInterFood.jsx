const SingleInterFood = ({ title, paragraph, icon }) => {
  return (
    <article className="group mb-5 flex gap-5 tablet:hidden">
      <div className=" w-[15rem]">
        <h1 className="heading-secondary">
          <a href="">{title}</a>
        </h1>{" "}
        <p className="paragraph ">{paragraph}</p>
      </div>
      <div className="h-[4rem] w-[4rem]  transition group-hover:rotate-45">
        <img src={icon} alt="" />
      </div>
    </article>
  );
};

export const SingleFoodRight = ({ title, paragraph, icon }) => {
  return (
    <article className="group mb-5 flex gap-5 ">
      <div className="h-[4rem] w-[4rem] transition group-hover:-rotate-45 sm:h-12 sm:w-12 ">
        <img src={icon} alt="" />
      </div>
      <div className="w-[15rem] tablet:w-full">
        <h1 className="heading-secondary sm:text-lg">
          <a href="">{title}</a>
        </h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    </article>
  );
};

export default SingleInterFood;
