import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Components/Landing";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
    </BrowserRouter>
  );
}

export default App;
