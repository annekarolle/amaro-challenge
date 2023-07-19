
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { useContext  } from "react";


import { BannerMain } from "../../components/BannerMain/BannerMain"
import { AuthContext } from "../../context/AuthContext";
import { HomeContainer } from "./homeStyle";
import { OrderProducts } from "../../components/OrderProducts/OrderProducts"

export const Home = () =>{

    const {   listProducts,   } = useContext(AuthContext); 

 
    return (
        <HomeContainer>
     
        <Header/> 
        <BannerMain/>
        <OrderProducts/>
        <main className="container-main-products">
          
        <ProductCard lista={listProducts}  />
    
       
        </main>
        <Footer/>
        </HomeContainer>
    )
}