import banner1 from "../../assests/banner1.png"
import banner2 from "../../assests/banner2.png"
import banner3 from "../../assests/banner3.png"
import banner4 from "../../assests/banner4.png"
import {motion} from "framer-motion"
import { CarouselContainer, ContainerBanner } from "./bannerMain.style"
import { useEffect, useState } from "react"




export const BannerMain = () => {
    const imagens = [banner1, banner2, banner3, banner4];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <ContainerBanner>
      

        
        <CarouselContainer>
          {imagens.map((imagem, index) => (
            <motion.img
              key={index}
              src={imagem}
              alt=""
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
              initial={{ x: '100%', opacity: 0 }}
              animate={{
                x: index === currentIndex ? '0%' : '100%',
                opacity: index === currentIndex ? 1 : 0,
              }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          ))}
        </CarouselContainer>
      </ContainerBanner>
    );
  };