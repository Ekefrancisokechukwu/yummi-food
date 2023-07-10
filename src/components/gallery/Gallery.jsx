import { galleryData } from "./data";
import SingleGallery from "./SingleGallery";

const Gallery = () => {
  return (
    <section className="py-16">
      <h1 className="heading-primary mb-12 text-center text-4xl font-bold">
        our Gallery
      </h1>
      <div className="grid grid-cols-4 grid-rows-[30rem__30rem] tablet:grid-cols-1 tablet:grid-rows-[15rem_15rem_15rem_15rem_15rem_15rem_15rem_15rem]">
        {galleryData.map((item, index) => {
          return <SingleGallery key={index} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Gallery;
