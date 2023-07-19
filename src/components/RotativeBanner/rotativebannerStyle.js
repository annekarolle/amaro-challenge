import { styled } from "styled-components";

export const ContainerBannerRotative = styled.div`
width: 100%;
background-color: #e3c8ad8c;
display: flex;
flex-direction: row;
align-content: center;
justify-content: center;
gap: 2em;
margin-top: 2em;
height: 250px;
 
 
    align-items: center;

    .banner-container{
        display: flex;
        width: 50%;      
        align-items: center; 
        overflow: hidden;
    }

ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1em;
    padding: 0;
}

li{
    width: 150px;
    height: 200px;
    background-color: #e3c8ad8c;
    padding: 0.5em;
    cursor: pointer;
}

li h6 {
    font-size: 10px;
}

.container-imagem-banner-rotative{
    width: 100%;
    height: 150px;
    background-color: white;
    overflow: hidden;
    display: flex;
}

.container-imagem-banner-rotative img{
    width: 100%;
    object-fit: cover;
}

.next-previus-btn{
    border: none;
    background-color: transparent;
    color: black;
    font-size: 2em;
    cursor: pointer;
}
`