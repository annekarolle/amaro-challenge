import { styled } from "styled-components";

export const Carpagestyle =styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

.section-cart-page{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  gap: 2em; 
  align-items: flex-start;
 
  justify-content: flex-end;

  @media  (max-width:780px ) {
     width: 100%;
     align-items: center;
     align-content: center;
     justify-content: center;
    

}
}

   
 .container-overlay-cart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    z-index: -1;
    display: flex;
    overflow: hidden;
    align-items: center;
}



 .container-overlay-cart img{
 object-fit: cover;
 width: 100%;
 height:100%;

} 
`