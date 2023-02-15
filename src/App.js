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
  const pageSize = 10;

  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
        <Route
            path="/"
            element={<News category='general' pageSize={pageSize} />}
          >
          </Route>
       
          <Route
            path="/entertainment"
            element={<News category='entertainment' pageSize={pageSize} />}
          >
          </Route>

          <Route
            path="/health"
            element={<News category='health' pageSize={pageSize} />}
          >
          </Route>

          <Route
            path="/sports"
            element={<News category='sports' pageSize={pageSize} />}
          >
          </Route>

          <Route
            path="/business"
            element={<News category='business' pageSize={pageSize} />}
          >
          </Route>

          <Route
            path="/technology"
            element={<News category='technology' pageSize={pageSize} />}
          >
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
