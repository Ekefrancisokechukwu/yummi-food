import Foods from "../products/Foods";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Upgrade from "../components/Upgrade";
import InterRecipe from "../components/international/InterRecipe";
import Story from "../components/story/Story";
import Gallery from "../components/gallery/Gallery";
import HomeCount from "../components/HomeCount";

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <InterRecipe />
        <Upgrade />
        <Story />
        <Banner />
        <Foods />
        <Gallery />
        <HomeCount />
      </main>
    </>
  );
};
export default Home;
