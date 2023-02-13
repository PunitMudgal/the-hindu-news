import React from "react";
import "./App.css";
import Header from "./Components/Header";
import News from "./Components/News";
// import Categories from "./Components/Categories";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
        <Route
            path="/"
            element={<News  />}
          >
          </Route>
       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
