import { useScroll } from "framer-motion";
import { useState } from "react";

const ProductImage = ({ images }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div className="xl:w-2/4">
      <img src={main.url} alt="img" className="xl:w-36 " />
      <div className="flex justify-center">
        {images.map((img, index) => {
          return (
            <img
              src={img.url}
              alt=""
              key={index}
              className={`h-24 w-24 cursor-pointer ${
                img.url === main.url
                  ? "border-spacing-1 border-2 border-rose-900"
                  : "opacity-75"
              } `}
              onClick={() => {
                setMain(images[index]);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductImage;
