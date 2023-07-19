import { styled } from "styled-components";

export const ContainerLogin = styled.div`

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;

.container-logo-form{
    width: 30%;
    overflow: hidden;
    margin: 1em;
}

.container-logo-form img{
    object-fit: contain;
    width: 100%;
}

.container-form{    
    width: 100%;
    display: flex;
    justify-content: center;
}

.container-form form{
    width: 300px;
    height: 250px;
    background-color:#ffffff9c;
    padding: 1em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 1em;
}

.input {
    border-bottom: 1px solid var(--base-4); 
    width: 90%;
    display: flex;
    justify-content: center;
    align-content: center;
   
}

.input label{
 color: var(--base-1); 
 font-size: 14px;
}
.input input{
    background-color: transparent;
    border: none;
    padding-left:1em;
    outline: none;
}



.btn-submit-login{
    background-color: var(--base-4);
    border: none;
    width:100%;
    padding: 1em;
    border-radius: 4px;
    cursor: pointer;
    color: var(--base-14);
}

.btn-submit-login:hover{
    background-color: var(--base-6);
 
    color: var(--base-1);
}
.container-overlay {
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



.container-overlay img{
 object-fit: cover;
 width: 100%;
 height: 100%;
}

@media (max-width:1149px ) {
    .container-overlay img{
        
    } 
}
`