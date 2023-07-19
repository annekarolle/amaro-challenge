import { styled } from "styled-components";

export const ProductContainer = styled.div`
width: 100%;
display: flex;   
justify-content: center;

ul{
    list-style: none;
    display: flex;   
    flex-wrap: wrap;
     width: 80%; 
    justify-content: center; 
    
    gap: 1em;
    margin-top: 1em;
    padding: 0;


    @media (max-width: 540px) {
        flex-wrap: nowrap;
        flex-direction: row;
        overflow-x: scroll;
        height: 550px;
        width: 95%;
        align-items: center;
        justify-content: flex-start;

        &::-webkit-scrollbar {
        height: 0.5rem;
      
        }
        &::-webkit-scrollbar-track {
        background: var(--base-11);
        border-radius: 0.3rem;
        }
        &::-webkit-scrollbar-thumb{
        background: var(--base-2);
        border-radius: 0.3rem;
        }
    }
}

.product-list {
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin: 1em;
    background-color: #ffffff78;
    padding: 1em;
}


.product-title{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.container-product-imagem{
    width: 250px;
    height: 350px;
    background-color: var(--gray-10);
    display: flex;
}

.container-product-imagem img{
    width: 100%;
    object-fit: cover;
}

.product-list.onsale{
    display: none;
}

.product-info{
    width: 100%;
    height: 80px;
    margin-top: 1em;
}
h4{
    margin: 0; 
    font-size: 12px;
}

h5{
    margin: 0; 
    font-size: 16px; 
}

span{
    font-size: 12px;
    margin: 0;
}
`