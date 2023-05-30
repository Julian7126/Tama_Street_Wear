import "./App.css";
import Router from "./Router/index";
import ShopProvider from "./context/cartContext";



function App() {
  return (
    <>
      <div className="App">

      <ShopProvider>
        
        <Router/>

      </ShopProvider>

      </div>
    </>
  );
}

export default App;
