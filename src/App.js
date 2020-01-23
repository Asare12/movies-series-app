import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import Landing from "./components/home/Landing";
import store from "./store";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Navigation />
        <Landing />
        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
