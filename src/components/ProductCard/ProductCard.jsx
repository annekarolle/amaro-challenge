import { ProductContainer } from "./productCardStyle"; 
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Loading } from "../Loading/Loading";
 

export const ProductCard = ({ lista, promo }) => { 

  const { handleSelectProduct } = useContext(AuthContext);

  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 1000);
  }, []);

  return (
    <>
      <ProductContainer>
        {showList ? (
          <ul>
            {lista.map((product, index) => (
              <li
                key={index}
                className="product-list"
                onClick={() => handleSelectProduct(product.name)}
              >
                <div
                  className="container-product-imagem"
                  style={{ position: "relative" }}
                >
                  {product.discount_percentage.length > 0 && (
                    <span
                      className="promo-tag"
                      style={{
                        position: "absolute",
                        background: "var(--base-10)",
                        padding: "0.5em",
                        marginTop: "0.5em",
                        marginLeft: "0.5em",
                      }}
                    >
                      {product.discount_percentage} Off
                    </span>
                  )}                 
            
                  <img src={product.image} alt="" />
                </div>
                <div className="product-info">
                 
                  <h4>
                    {product.name} - {product.color}
                  </h4>
                 
                  
                  {product.discount_percentage.length > 0 ? (
                    <>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "var(--gray-2)",
                        }}
                      >
                        {product.regular_price}
                      </span>
                      <h5>{product.actual_price}</h5>
                    </>
                  ) : (
                    <h5>{product.regular_price}</h5>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <Loading />
          </>
        )}
      </ProductContainer>
    </>
  );
};
