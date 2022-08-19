import React from "react";
import { Link } from "react-router-dom";
import { StyledLinks, StyledNavBar } from "./styled-components/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function NavBar() {
  return (
    <StyledNavBar>
      <StyledLinks></StyledLinks>
      <StyledLinks></StyledLinks>
      <StyledLinks></StyledLinks>
    </StyledNavBar>
  );
}

export default NavBar;
