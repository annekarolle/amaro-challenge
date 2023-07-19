import * as yup from "yup";
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { ContainerLogin } from "./loginstyle";
import foto from "../../assests/login.png" 
import { RotativeBanner } from "../../components/RotativeBanner/RotativeBanner";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";



export const Login = () => {

const schema = yup.object().shape({
  email: yup.string().trim().required("Campo obrigatório").email("Email inválido"),
  password: yup.string().trim().required("Campo obrigatório"),
});

  const { onSubmitLogin } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 

  return (
 <>
 <Header/>
    <ContainerLogin>       
      <div className="container-form">       
        <form onSubmit={handleSubmit(onSubmitLogin)}>
            
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" {...register("email")}  />
            {errors.email && <p className="errorRegister">{errors.email.message}</p>}
          </div>
          <div className="input">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" {...register("password")} />
            {errors.password && <p className="errorRegister">{errors.password.message}</p>}
          </div>
          <button type="submit" className="btn-submit-login">Login</button>
        </form>
      </div>

      <div className="container-overlay">
        <img src={foto} alt="" />
      </div>
      
    </ContainerLogin>
    <RotativeBanner/>
    <Footer/>
 </>
  );
};