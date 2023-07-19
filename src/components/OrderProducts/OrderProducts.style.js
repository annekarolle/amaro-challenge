import { styled } from "styled-components";

export const OrderContainer = styled.div`

width: 100%;
 
background-color: var(--base-19);
 
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1em;
    justify-content: center;
    width: 80%;
    flex-wrap: wrap;
 

}



button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--gray-2);
}
`