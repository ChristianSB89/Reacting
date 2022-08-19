import "./App.css";
import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StyledNavBar } from "./components/styled-components/styles";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { StyledLink } from "./components/styled-components/styles";

function App() {
  return (
    <Router>
      <StyledNavBar>
        <StyledLink>
          <Link to="/">Home</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/about">About</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/gallery">Gallery</Link>
        </StyledLink>
      </StyledNavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
