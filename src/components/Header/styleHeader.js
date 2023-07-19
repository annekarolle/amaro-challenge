import { styled } from "styled-components";

export const HeaderStyleContainer = styled.div`
width: 100%; 
display: flex;
flex-direction: column;
justify-content: space-between;
height: 30px;
   
 .container-slide-menu.open{
    width: 300px;   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    z-index: 9999;

    @media (min-width: 100px)  and (max-width: 350px) {
    width: 100%;
    
}
}

.second-level-menu{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.container-slide-menu.close{
    width: 300px;
    background-color: transparent; 
    
}


.container-slide-menu button{
    border: none;
    background-color: transparent;   
    font-size: 1.5em;
    cursor: pointer;
}

.btn-open{
    color: var(--base-1);
}

.btn-close{
    color: var(--white);
}

.btn-close.close{
    color:transparent;
    width: 300px;
}

.slide-menu{    
    width: 100%;
    background-color:#8c7464db;
}


.container-interno-slide-menu{
    width: 100%;
   
}

.container-interno-slide-menu h2{
    font-size: 14px;
}

ul{
    list-style: none;
    padding-left: 1em;
    margin: 0;
    color: white;
    margin-bottom: 1em;
    
}

li{
    cursor: pointer;
    padding-left: 1em;
    width: 100%;
    display: flex;
    flex-direction: row;
}

li h3, span{
    margin: 0;
    font-size: 12px;
    margin-bottom: 0.2em;
}

li span{

    font-size: 10px;
}

li:hover{
    color: var(--gray-dark);
}

.summary-no-arrow {
  list-style-type: none;
  cursor: pointer;
}

.summary-no-arrow:hover{
    font-weight: 500;
}




 
`