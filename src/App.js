import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./Components/MainPage";
import s from './Styles/App.module.css'


function App() {
  return (
    <div className={s.App}>
      <BrowserRouter>
        <MainPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
