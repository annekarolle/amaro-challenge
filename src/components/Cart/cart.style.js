import { styled } from "styled-components";

export const ContainerCart = styled.div`
width: 100%;
max-width: 500px;
 
background-color: #ffffffa6;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1em;
margin-top: 1em;
margin-right: 3em;


@media  (max-width:780px ) {
     width: 100%;
     align-items: center;
     align-content: center;
     margin-right: 0;

}


ul{
    list-style: none;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap:1em; 
    margin-bottom: 1em;
    background-color: #ffffffa6;
 
 
    @media  (max-width:780px ) {
        padding: 0;
        width: 95%;
     
}

}

li{
    display: flex;
    flex-direction: row;
    gap:1em;
    width: 100%;
    justify-content: space-between;
    
    
   
}

.container-principal{
    display: flex;
    flex-direction: row;
    gap:1em; 
    width: 100%;
    @media  (max-width:780px ) {
        padding: 0;
        width: 95%;
}
}
li h4, h5{
 margin: 0;
 
}

h5{
    color:var(--base-1); 
    font-weight :200 ;
}

li span{
    color:var(--base-3);
    font-size: 12px;


}
.container-imagem-cart{
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    align-content: flex-start;
    border: 2px solid var(--base-5);

    background-color:white;
}

.container-imagem-cart img{
    width: 100%;
    
    object-fit: contain;
}

.btn-delete{
    border: none;
    background-color: transparent;
    color:var(--base-5);
    cursor: pointer;
    font-size: 1em;

}

.btn-delete:hover{
    color:var(--base-1);
}

.action-cart{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

.action-cart span{
    border: 1px solid var(--base-4);
    background-color: var(--base-18);
    width: 20px;
    height: 20px;
    text-align: center;
}

.container-header-cart{
    width: 100%;
    background-color: #ffffffa6;
   
    @media  (max-width:780px ) {
        padding: 0;
        width: 95%;
     
}

}

.container-header-cart h1{
    margin: 1em;
    text-align: left;
    font-size: 14px;
}

.adds-products{
    display: flex;
    flex-direction: row;
  
}

.adds-products button{
    color: var(--success);
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
}

.resume-order{     
    background-color: #ffffffa6;
    width: 100%;
    max-width: 500px;
     

    @media  (max-width:780px ) {
        padding: 0;
        width: 95%;
     
}
}
 

 .container-cart-footer{
    border-top: 2px solid var(--base-5);
 }
`

