import { styled } from "styled-components";

export const Top = styled.div`
width: 100%;
height: 3em;
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: var(--base-10);
align-items: center;
flex-wrap: wrap;

ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1em;
    padding: 0;
    @media (max-width: 549px) {
        flex-wrap: wrap;
    }
}



a{
    text-decoration: none;
    color: var(--base-1);
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 300px) {
       font-size: 10px;
    }
}

a:hover{
    color: var(--base-4);
}

.frete, .pix{
    color: var(--base-2);
    font-weight: 100;
}

@media  (max-width:670px ) {
    .frete, .pix{
        display: none;
    } 
}
`