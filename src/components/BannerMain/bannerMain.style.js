import { styled } from "styled-components";

export const ContainerBanner = styled.div` 
   width: 100%;  
   background-color  : var(--base-8);
`

export const CarouselContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;

.carousel-image {
  width: 100%;
  height: 100%;

  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
`