import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header"; 
import { AuthContext } from "../../context/AuthContext";
import { ProductFullInfo } from "./productPageStyle";
import { useNavigate } from "react-router-dom";
import { RotativeBanner } from "../../components/RotativeBanner/RotativeBanner";
import { Loading } from "../../components/Loading/Loading.jsx";
 

export const ProductPage = () => {
  const user = localStorage.getItem("@context-amaro:user");   
 

  const {
    selectProduct,
    handleProductSelect,
    product,
    listProducts,
    setSelectSize,
    selectSize,
    cartList,
    setCartList,setToastMessage , toastMessage
  
  } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

   

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      handleProductSelect();
      setLoading(false);
    }, 2000);

 
  }, [selectProduct, cartList]);

 


  const handleAddProductToCart = (produto) => {
    const size = handleChange();
  
    try {
      const adicionado = listProducts.find((item) =>
        item.name.toLowerCase().includes(produto.name.toLowerCase())
      );
  
      const updatedProduct = {
        ...adicionado,
        size: size,
     
      };
  
      setCartList((prevCartList) => prevCartList.concat(updatedProduct));
      const loggedUser = localStorage.getItem("@context-amaro:user");
      const parsedUser = JSON.parse(loggedUser);
  
      parsedUser.cart.push(updatedProduct);
      
  
      localStorage.setItem("@context-amaro:user", JSON.stringify(parsedUser));

      setToastMessage("Produto adicionado ao carrinho!")  
   
    } catch (error) {
      console.error("Ocorreu um erro ao adicionar o produto ao carrinho:", error);
      alert(
        "Ocorreu um erro ao adicionar o produto ao carrinho. Por favor, tente novamente."
      );
    }
  };

  const navigate = useNavigate();


  const handleChange =()=>{
      return selectSize
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <ProductFullInfo>
        {product && Object.keys(product).length > 0 ? (
          <>
            <div className="container-info-product-complete">
              <div className="container-product-page-product">
                <img src={product.image} alt="" />
              </div>
              <div className="infor-products-page">
                <h1>{product.name} - {product.color}</h1>

                {product.on_sale ? (
                  <>
                    {product.actual_price > product.regular_price ? (
                      <div className="payment-condition">
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "var(--gray-2)",
                            fontSize: "12px",
                          }}
                        >
                          {product.regular_price}
                        </span>
                        <h4>{product.actual_price}</h4>
                        <span
                          style={{ color: "var(--success)" }}
                          className="payment-tag"
                        >
                          {product.installments} sem juros
                        </span>
                      </div>
                    ) : (
                      <div className="payment-condition">
                        <span>{product.regular_price}</span>
                        <span
                          style={{ color: "var(--success)" }}
                          className="payment-tag"
                        >
                          {product.installments} sem juros
                        </span>
                      </div>
                    )}
                    <form onSubmit={(e) => e.preventDefault()}>
                      <select
                        className="select-size"
                        required onChange={(e) =>
                          setSelectSize(e.target.value)
                        }
                       
                      >
                        <option value="">Selecione um tamanho</option>
                        {product.sizes.map((item, index) => (
                          <option
                            key={index}
                            value={item.size}
                            disabled={!item.available}
                          >
                            {item.size}
                          </option>
                        ))}
                      </select>

                      <div className="buy-container-cart">
                        {user && user.length > 0 ? (
                          <button className="btn-add-cart" type="submit"  onClick={() =>
                            handleAddProductToCart(product)
                          }>
                            Adicionar produto à sacola
                          </button>
                        ) : (
                          <button
                            className="btn-add-cart"
                            onClick={() => navigate("/login")}
                          >
                            Adicionar produto à sacola
                          </button>
                        )}
                      </div>
                    </form>
                  </>
                ) : (
                  <span style={{ color: "var(--danger)" }}>
                    Produto não está disponivel no momento
                  </span>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Ops! Produto não encontrado</p>
        )}
      </ProductFullInfo>
      <RotativeBanner />
      <Footer />
    </>
  );
};
