import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerBannerRotative } from "./rotativebannerStyle";
import { motion } from "framer-motion";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

export const RotativeBanner = () => {
  const { listProducts, handleSelectProduct } = useContext(AuthContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listProducts.length);
  };

  const onPrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + listProducts.length) % listProducts.length
    );
  };

  const visibleImages = listProducts.slice(currentIndex, currentIndex + 5);

  return (
    <ContainerBannerRotative>
      <button onClick={onPrevClick} className="next-previus-btn">
        <BsArrowLeftCircle />
      </button>
      <div className="banner-container">
        <motion.div
          className="image-slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul>
            {visibleImages.length > 0 ? (
              visibleImages.map((product, index) => (
                <li
                  className="imagem-banner-rative"
                  key={index}
                  onClick={() => handleSelectProduct(product.name)}
                >
                  <div
                    className="container-imagem-banner-rotative"
                    style={{ position: "relative" }}
                  >
                    {product.discount_percentage.length > 0 && (
                      <span
                        className="promo-tag"
                        style={{
                          position: "absolute",
                          background: "var(--base-10)",
                          padding: "0.2em",
                          marginTop: "0.2em",
                          marginLeft: "0.2em",
                          fontSize: "10px",
                        }}
                      >
                        {product.discount_percentage} Off
                      </span>
                    )}
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product-info-container">
                    <h6>{product.name}</h6>
                  </div>
                </li>
              ))
            ) : (
              <span>Nenhum produto encontrado</span>
            )}
          </ul>
        </motion.div>
      </div>
      <button onClick={onNextClick} className="next-previus-btn">
        <BsArrowRightCircle />
      </button>
    </ContainerBannerRotative>
  );
};
