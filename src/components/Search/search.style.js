import { styled } from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  
    flex-wrap:wrap;
    justify-content: center;

    @media (max-width: 549px) {
        flex-direction: column;
    }

    .container-search{
        width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap;
    @media (max-width: 779px) {
        flex-direction: column;
    }
    }

    .container-items{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
 
    flex-wrap: wrap;
    @media (max-width: 549px) {
        justify-content: center;
        padding-right: 0; 
       
    }
    
    }

    .container-items input{
        border: none;
       
        outline: none;
        background-color: transparent;
        padding-left: 1em;
        padding-bottom: 5px;
        @media (max-width: 549px) {
        width: 80%;
       
    }
    }

    .filter-container{
    border-bottom: 1px solid var(--base-1);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 549px) {
        width: 80%;
        
    }
  }

  .filter-container-2{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
    .container-logo{     
        width: 150px;
        overflow: hidden;
        height: 30px;
        margin-top: 1em;
    }

    .container-logo img{
        width: 100%;
        object-fit: contain;
    }

   

   

  
    .btn-login, .btn-cart, .filter-button{
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: var(--base-1);
    }

    .btn-login:hover, .btn-cart:hover, .filter-button{
        transform: scale(1.03);
        color: var(--base-3);
    }

    .container-cart{
        display: flex;
        flex-direction: row;
    }
`