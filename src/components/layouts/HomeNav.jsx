import { links } from "./nav/navdataLink";
import SingleLink from "./nav/SingleLink";

const HomeNav = () => {
  return (
    <nav className="lg:hidden">
      <ul className="flex items-center gap-8">
        {links.map((link, index) => {
          return <SingleLink key={index} {...link} />;
        })}
      </ul>
    </nav>
  );
};
export default HomeNav;
