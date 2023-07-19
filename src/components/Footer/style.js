import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 10em;
  margin-top: 1em;
  align-items: center; 
  align-content: center; 
  padding-top: 1em;
  justify-content: center;

  background-color: var(--base-3);
  

 @media (max-width:549px) {
  flex-direction: column;
 }

  

  .scrool {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 53px;
    height: 53px;   
    border-radius: 4px;
    cursor: pointer;
    :hover {
      transform: scale(1.03);
    }

    p {
      font-size: 16px;   
    
    }
  }  

  .copyrigths{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    width: 80%;
    margin-bottom: 1em;
    color: white;

    p, h6{
     margin: 0;
      font-size: 10px;
      text-align: center;
      
    }
  }

  a{
    text-decoration: none;
    color: white;
    font-size: 10px;
  }

  .contact{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    align-items: center;
    justify-content: center;  

  }

  .contact a{
    font-size: 20px;
    cursor: pointer;
    margin-top: 10px;
  }
  .contact a:hover{
    color:white;
    transform: scale(1.03);
  }
`;
