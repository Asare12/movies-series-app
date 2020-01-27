import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Landing from "./components/home/Landing";
import store from "./store";
import { Route } from "react-router-dom";
import Movie from "./components/home/Movie";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Navigation />
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie/:id" component={Movie} />
        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
