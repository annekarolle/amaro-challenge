import React from "react";
import { StyledFooter } from "./style";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
export const Footer = () => {
  return (
    <StyledFooter className="StyledFooter">
      <div className="copyrigths">
        <h6>©2023 Copyright Anne karolle </h6>

        <div className="contact">
          <a
            href="https://github.com/annekarolle"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/annekarolle/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://wa.me/5562991687171"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp />
          </a>
          <a
            href="mailto:annekarolle@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
        </div>

        <p>
          © Todos os direitos de imagem e produtos utilizados neste projeto de
          criação da ecommerce da Amaro são de propriedade exclusiva da Amaro.
          Este projeto é apenas para fins de estudo e não tem nenhuma afiliação
          oficial com a Amaro.
        </p>
        <p>
          Essas imagems foram editas por @annekarolle, edição original{" "}
          <a href="https://www.freepik.com/free-psd/fashion-sale-instagram-stories-collection_29324110.htm#query=fashion&position=2&from_view=search&track=sph">
            {" "}
            by Freepik
          </a>
        </p>
      </div>
    </StyledFooter>
  );
};
