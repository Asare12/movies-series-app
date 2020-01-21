import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Footer />
    </React.Fragment>
  );
}

export default App;
