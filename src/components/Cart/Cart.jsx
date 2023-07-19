import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerCart } from "./cart.style.js";
import { SlTrash } from "react-icons/sl";
import { Loading } from "../Loading/Loading";

export const Cart = () => {
  const { cartList, setCartList } = useContext(AuthContext);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const loggedUser = localStorage.getItem("@context-amaro:user");
      const parsedUser = JSON.parse(loggedUser);

      if (parsedUser && parsedUser.length > 0) {
        setCartList(parsedUser.cart);
      } else {
        setShowList(false);
      }
    }, 2000);
  }, []);

  const handleRemoveProductFromCart = (index, name) => {
    const loggedUser = localStorage.getItem("@context-amaro:user");
    const parsedUser = JSON.parse(loggedUser);

    const mesmoProduto = parsedUser.cart.find((item) => item.name === name);

    const itemIndex = parsedUser.cart.indexOf(mesmoProduto);

    parsedUser.cart.splice(itemIndex, 1);

    setCartList((prevCartList) =>
      prevCartList.filter((item, i) => i !== index)
    );

    localStorage.setItem("@context-amaro:user", JSON.stringify(parsedUser));
  };

  return (
    <>
      <ContainerCart>
        {cartList && cartList.length > 0 ? (
          <>
            <div className="container-header-cart">
              <h1>Carrinho de compras</h1>
            </div>
            <ul>
              {cartList && cartList.length > 0 ? (
                cartList.map((item, index) => (
                  <li key={index}>
                    <div className="container-principal">
                      <div className="container-imagem-cart">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="payment">
                        <h4>{item.actual_price}</h4>
                        <span>{item.installments}</span>
                        <h5>Tamanho - {item.size}</h5>
                      </div>
                    </div>
                    <div className="action-cart">
                      <button
                        className="btn-delete"
                        onClick={() =>
                          handleRemoveProductFromCart(index, item.name)
                        }
                      >
                        <SlTrash />
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li>
                  <p>Nenhum produto selecionado</p>
                </li>
              )}
            </ul>

            <div className="resume-order">
              <h4>Resumo do Pedido</h4>
              <div className="container-cart-footer">
                <p>Total de items no carrinho: {cartList.length}</p>
                <p>
                  Valor total: R${" "}
                  <strong>
                    {" "}
                    {cartList
                      .reduce(
                        (total, item) =>
                          total +
                          parseFloat(
                            item.actual_price
                              .replace("R$", "")
                              .replace(",", ".")
                          ),
                        0
                      )
                      .toFixed(2)}
                  </strong>
                </p>
              </div>
            </div>
          </>
        ) : (
          // <Loading />
          <>Carrinho vazio!</>
        )}
      </ContainerCart>
    </>
  );
};
