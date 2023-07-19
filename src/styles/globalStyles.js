import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root{
  --base-1: #7e6358;
  --base-2: #8c7464;
  --base-3: #9a826f;
  --base-4: #a8907b;
  --base-5: #b79e86;
  --base-6: #c6ad92;
  --base-7: #d4bba0;
  --base-8: #e3c8ad;
  --base-9: #f1d6bb;
  --base-10: #ffd4c8;
  --base-11: #ffddcf;
  --base-12: #ffe6d6;
  --base-13: #ffeede;
  --base-14: #fff6e5;
  --base-15: #fffdf2;
  --base-16: #fafff9;
  --base-17: #f9fffc;
  --base-18: #f7fffe;
  --base-19: #f6ffff;
  --base-20: #f4ffff;

  --gray-dark: #343a40;   
  --gray-0: #888888;
  --gray-1: #929292;
  --gray-2: #9b9b9b;
  --gray-3: #a5a5a5;
  --gray-4: #aeaeae;
  --gray-5: #b8b8b8;
  --gray-6: #c1c1c1;
  --gray-7: #cbcbcb;
  --gray-8: #d4d4d4;
  --gray-9: #dedede;
  --gray-10: #e7e7e7;     
 
    --success: #078a00;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #ff6868;  
    --black: #000;
    --white: #fff;  
    --sans-serif: "Gotham","Helvetica Neue","Helvetica","Arial",sans-serif;
    --monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}

  body {
    margin: 0;
    padding: 0;   
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;  
    background-color:#ffd4c88c;
  
    &::-webkit-scrollbar {
      width: 0.5rem;
      
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




.container-main-products{
  width: 100%;
}


.toast {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: var(--base-2);
  color: white;
  border-left: 10px solid #078a00;
  border-radius: 4px;
  z-index: 1000;
  padding: 1em;
  box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.48);
-webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.48);
-moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.48);
}

 
`;
