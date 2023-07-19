import { createContext, useEffect, useState } from "react";
import productsdata from "../../src/products.json";
import { useNavigate } from "react-router-dom";
import { userData } from "../utils/data";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [selectProduct, setSelectProduct] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const [product, setproduct] = useState({});
  const [listProducts, setlistProducts] = useState([]);
  const [selectCartProduct, setSelectCarProduct] = "";
  const [cartList, setCartList] = useState([]);
  const [islogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const getUser = localStorage.getItem("@context-amaro:user");
      const parsedUser = JSON.parse(getUser);
      setUser(parsedUser);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setlistProducts(productsdata.products);
    }, 2000);
  }, [selectProduct]);

  const links = [
    {
      title: "Nossas Lojas",
      link: "https://amaro.com/br/pt/guide-shops",
    },
    {
      title: "Cartão Presente",
      link: "https://amaro.com/br/pt/cartao-presente",
    },
    {
      title: "BLOG",
      link: "http://ama.ro/amaro-inspire",
    },
  ];

  const handleProductSelect = () => {
    const found = productsdata.products.find((item) =>
      item.name.includes(selectProduct)
    );
    setproduct(found);
  };

  const navigate = useNavigate();

  const onSubmitLogin = async (data) => {
    const { email, password } = data;

    const foundUser = userData.find(
      (user) => user.email === email && user.password === password
    );
    
      setToastMessage("Login efetuado com sucesso!");
      localStorage.setItem("@context-amaro:userName", foundUser.name);
      localStorage.setItem("@context-amaro:user", JSON.stringify(foundUser));
      localStorage.setItem(
        "@context-amaro:token",
        JSON.stringify(email + "AmaroChallenge")
      );

      navigate("/");
      setIsLogin(true);
    }


  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("@context-amaro:token");
    localStorage.removeItem("@context-amaro:user");
    localStorage.removeItem("@context-amaro:userName");
    navigate("/");
    setToastMessage("Logout efetuado com sucesso!");
    cartList(null)
  };

  const handleSelectProduct = (name) => {
    if (name.length > 0) {
      setSelectProduct(name);
      navigate(`/product/:${name}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        selectProduct,
        setSelectProduct,
        links,
        handleProductSelect,
        product,
        setproduct,
        listProducts,
        setlistProducts,
        selectCartProduct,
        setSelectCarProduct,
        cartList,
        setCartList,
        islogin,
        setIsLogin,
        handleLogout,
        handleSelectProduct,
        onSubmitLogin,
        selectSize,
        setSelectSize,
        user,
        setUser,
        toastMessage,
        setToastMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
