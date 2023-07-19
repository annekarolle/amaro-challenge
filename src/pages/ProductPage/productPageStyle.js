import { styled } from "styled-components";


export const ProductFullInfo = styled.div`

width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

.container-info-product-complete{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    flex-wrap: wrap;
    gap: 2em;
    
 
}

.container-product-page-product{
    width: 300px;
    height: 400px;
    overflow: hidden;
    background-color: var(--gray-14);
    display: flex;
    border: 1em solid #ffffffa6;
   

    @media (max-width:760px ) {
        width: 60%;
        height: 400px;
    }
}

.infor-products-page{
    width:400px;
    
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width:760px ) {
        width: 100%;
        height: 400px;
        align-items: center;
        align-content: center;
    }
}

form{
    width: 100%;
   
}

.infor-products-page h1{
    @media (max-width:760px ) {
        text-align: center;
    }
}

.container-product-page-product img{
    width: 100%;
    object-fit: cover;
}


.tag-size{
    width: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 1em;
    padding: 0;
}
.select-size{
    
    width:   60%;
    padding: 5px;
    margin-top: 1em;
    margin-bottom: 1em;
    border: 1px solid var(--base-5);
    border-radius: 4px;   
    cursor: pointer; 
    background-color: var(--base-9);
}

.btn-size:hover{
   background-color: var(--base-9);
}

.btn-size.disable{
    pointer-events: none;
    border: 1px solid var(--gray-5);
    color:white;
}

.btn-add-cart{
    background-color: var(--base-4);
    border: none;
    width:60%;
    padding: 1em;
    border-radius: 4px;
    cursor: pointer;
    color: var(--base-14);
}

.btn-add-cart:hover{
    background-color: var(--base-6);
 
    color: var(--base-1);
}


.payment-condition{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
}

.payment-condition span{
    margin: 0;
}
.payment-condition h4{
    margin: 0;

  
}

.payment-tag{
    font-size: 12px;
}


`