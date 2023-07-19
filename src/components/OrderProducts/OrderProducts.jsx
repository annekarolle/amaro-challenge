import { OrderContainer } from "./OrderProducts.style";
import { BsArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs"; 
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const OrderProducts = () => {
  const { listProducts, setlistProducts } = useContext(AuthContext);



  const handleOrderProductsBigPrice = () => {
    const sortedList = [...listProducts];
    sortedList.sort((a, b) => {
      const priceA = parseFloat(
        a.actual_price.replace("R$ ", "").replace(",", ".")
      );
      const priceB = parseFloat(
        b.actual_price.replace("R$ ", "").replace(",", ".")
      );

      return priceB - priceA;
    });
    setlistProducts(sortedList);
  };

  const handleOrderProductsSmallPrice = () => {
    const sortedList = [...listProducts];
    sortedList.sort((a, b) => {
      const priceA = parseFloat(
        a.actual_price.replace("R$ ", "").replace(",", ".")
      );
      const priceB = parseFloat(
        b.actual_price.replace("R$ ", "").replace(",", ".")
      );

      return priceA - priceB;
    });
    setlistProducts(sortedList);
  };

  const handleOrderAtoZ = () => {
    const sortedList = [...listProducts];
    setlistProducts(sortedList.sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <OrderContainer>
      <ul>
        <li>
          <button onClick={handleOrderAtoZ}>Ordenar A | Z</button>
        </li>
    
        <li>
          <button onClick={handleOrderProductsSmallPrice}>
            Ordenar menor preço <BsArrowDownCircleFill />
          </button>
        </li>
        <li>
          <button onClick={handleOrderProductsBigPrice}>
            Ordenar maior preço <BsFillArrowUpCircleFill />
          </button>
        </li>
      </ul>
    </OrderContainer>
  );
};
