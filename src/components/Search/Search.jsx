import { SearchContainer } from "./search.style";
import logo from "../../assests/Logo.png";
import { PiUserCircleThin } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import productsdata from "../../products.json";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { listProducts, setlistProducts, cartList, handleLogout } =
    useContext(AuthContext);

  const user = localStorage.getItem("@context-amaro:userName");

  const [filter, setFilter] = useState("");

  const filteredSpells = (filter, clearFilter) => {
    if (clearFilter) {
      setFilter("");
      setlistProducts(productsdata.products);
    } else if (filter === "") {
      setlistProducts(productsdata.products);
    } else {
      const filtrado = listProducts.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
      setlistProducts(filtrado);
    }
  };

  const navigate = useNavigate();

  return (
    <SearchContainer>
     <div className="container-search">
     <div
        className="container-logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="" />
      </div>
      <div className="container-items">
        <div className="filter-container">
          <input
            type="text"
            placeholder="Pesquisa..."
            onChange={(e) => setFilter(e.target.value)}
            onKeyUp={() => filteredSpells(filter)}
          />
          {filter && filter.length > 0 ? (
            <button
              className="filter-button"
              onClick={() => filteredSpells(filter, true)}
            >
              x
            </button>
          ) : (
            <></>
          )}
        </div>
        {user && user.length > 0 ? (
          <>
            <p>Bem vindo(a), {user}!</p>
            <button onClick={handleLogout} className="btn-login">
              <AiOutlineLogout /> sair
            </button>
          </>
        ) : (
          <button className="btn-login" onClick={() => navigate("/login")}>
            <PiUserCircleThin /> Login
          </button>
        )}

        <div className="container-cart">
          {user && user.length > 0 ? (
            <button className="btn-cart" onClick={() => navigate("/cart")}>
              <BsHandbag />
            </button>
          ) : (
            <button className="btn-cart" onClick={() => navigate("/login")}>
              <BsHandbag />
            </button>
          )}

          {cartList && cartList.length > 0 ? (
            <span>{cartList.length}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
     </div>
    </SearchContainer>
  );
};
