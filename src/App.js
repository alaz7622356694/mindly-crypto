import React from "react";
import "./App.css";
import ListCryptoComponent from "./components/ListCryptoComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import InfoComponent from "./components/InfoComponent";
import FormComponent from "./components/FormComponent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid bg-dark text-light ">
      <Router>
        <HeaderComponent />

        <InfoComponent />
        <br></br>
        <div>
          <FormComponent />
        </div>
        <br></br>
        <div>
          <ListCryptoComponent />
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
