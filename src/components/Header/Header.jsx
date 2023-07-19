import { useContext, useState } from "react";
 
import { HeaderStyleContainer } from "./styleHeader";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { PromoTopBanner } from "../PromoTopBanner/PromoTopBanner";
import { Search } from "../Search/Search";
import productdata from "../../products.json"

export const Header = () => {
  const [isCloseMenu, setisCloseMenu] = useState(true);

  const handleOpenMenu = () => {
    setisCloseMenu(!isCloseMenu);
  };

  const { links,   handleSelectProduct } =
    useContext(AuthContext);

  return (
    <>
      <PromoTopBanner
        frete={"Frete grátis acima de R$ 199"}
        pix={"GANHE 5% OFF no PIX"}
        link={links}
      />
      <Search />
      <HeaderStyleContainer>
        <motion.div
          className={`container-slide-menu ${isCloseMenu ? "close" : "open"}`}
        >
          {isCloseMenu ? (
            <>
              <button
                onClick={handleOpenMenu}
                className={`btn-open ${isCloseMenu ? "close" : "open"}`}
              >
                <GiHamburgerMenu />
              </button>
            </>
          ) : (
            <>
              <motion.div
                className="slide-menu"
                initial={{ x: "-100%" }}
                animate={{ x: isCloseMenu ? "-100%" : "0" }}
                transition={{ duration: 0.4 }}
              >
                <button onClick={handleOpenMenu} className="btn-close">
                  <IoIosClose />
                </button>
                <ul className="list-menu">
                  <h2>Novidades</h2>
                  {productdata.products
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((product, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectProduct(product.name)}
                      >
                      <h3>{product.name.charAt(0).toUpperCase() +
                          product.name.slice(1).toLowerCase()}</h3>   <span>- {product.color}</span>
                      </li>
                    ))}
                </ul>
              </motion.div>
            </>
          )}
        </motion.div>
      </HeaderStyleContainer>
    </>
  );
};
