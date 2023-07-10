const SingleStory = ({ title, paragraph, icon }) => {
  return (
    <article className=" group mt-8 flex items-center gap-3">
      <div className="h-[6rem] w-[6rem] transition group-hover:-rotate-45 sm:h-12 sm:w-12">
        <img src={icon} alt="icon" />
      </div>

      <div className="">
        <h1 className="heading-secondary sm:text-lg">
          <a href=""> {title}</a>
        </h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    </article>
  );
};
export default SingleStory;
