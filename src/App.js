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
            element={<News category='general' />}
          >
          </Route>
       
          <Route
            path="/entertainment"
            element={<News category='entertainment' />}
          >
          </Route>

          <Route
            path="/health"
            element={<News category='health' />}
          >
          </Route>

          <Route
            path="/sports"
            element={<News category='sports' />}
          >
          </Route>

          <Route
            path="/business"
            element={<News category='business' />}
          >
          </Route>

          <Route
            path="/technology"
            element={<News category='technology' />}
          >
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
