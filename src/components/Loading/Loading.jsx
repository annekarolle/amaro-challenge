

import { motion } from "framer-motion";
import { LoagindContainer } from "./style";
import load from "../../assests/load.png";

export const Loading = () => {

  
  return (
    <>
      <LoagindContainer>
        <div className="container-image-loading">
          <motion.img
            src={load}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <p>Carregando...</p>
      </LoagindContainer>
    </>
  );
};
