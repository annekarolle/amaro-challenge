import "./App.css"; 
import { AuthContext } from "./context/AuthContext";
import AppRoutes from "./routes/routes";
import { GlobalStyle } from "./styles/globalStyles";
import { useContext, useEffect } from "react";

function App() {

  const {  setToastMessage , toastMessage} = useContext(AuthContext);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 5000);  
  
       
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);


  return (
    <div className="App">
      {toastMessage && <div className="toast">{toastMessage}</div>}
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

export default App;
