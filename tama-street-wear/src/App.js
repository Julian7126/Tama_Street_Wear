import "./App.css";
// import Router from "./router";
import Modal from "./components/Modal"
import ShopProvider from "./context/Shop";

function App() {
  return (
    <div className="App">
      {/* <Router/> */}
      <ShopProvider>

    <Modal/>

      </ShopProvider>
    </div>
  );
}

export default App;
