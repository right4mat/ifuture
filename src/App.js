import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Email from "./components/Email";
import Finish from "./components/Finish";

import Context from './context/Context';

function App() {
  const {finish} = React.useContext(Context);
  return (
    <div className="App">
      <div className={finish ? "Main MainHide" : "Main"}>
        <Header />
        <About />
        <Email />
      </div>
      <Finish />
    </div>
  );
}

export default App;
