import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { RotativeBanner } from "../../components/RotativeBanner/RotativeBanner";
import { Cart } from "../../components/Cart/Cart";
import cart from "../../assests/cart.png";
import { Carpagestyle } from "./carpagestyle";

export const CartPage = () => {
  return (
    <Carpagestyle>
      <Header />
      <section className="section-cart-page">
        <Cart />
        <div className="container-overlay-cart">
          <img src={cart} alt="" />
        </div>
      </section>

      <RotativeBanner />
      <Footer />
    </Carpagestyle>
  );
};
