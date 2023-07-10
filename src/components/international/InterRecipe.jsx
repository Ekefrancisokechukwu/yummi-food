import { InterFoodContainer } from "./InterFoodContainer";

const InterRecipe = () => {
  return (
    <section className="relative bg-[url(https://www.pngkit.com/png/full/22-228568_tear-clipart-torn-piece-paper-torn-paper-edges.png)] bg-cover px-36 py-28 lg:px-[2rem]">
      <div className="text-center">
        <h1 className="heading-primary ">international cuisines</h1>
        <h3 className="mt-3 text-lg font-[500] capitalize text-gray-800">
          incredibly tasty international dish
        </h3>
      </div>
      <InterFoodContainer />
    </section>
  );
};
export default InterRecipe;
