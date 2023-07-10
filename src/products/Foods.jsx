import FoodContainer from "./FoodContainer";

const Foods = () => {
  return (
    <section className="py-[9rem]">
      <div className="text-center text-gray-800 ">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <p className="mx-auto my-0 mt-3 w-[35rem] text-[1.04rem]   sm:w-full ">
          Quam pellentesque nec nam aliquam sem et tortor consequat. Ut placerat
          orci nulla pellentesque dignissim enim sit amet venenatis.
        </p>
      </div>
      <FoodContainer />
    </section>
  );
};
export default Foods;
