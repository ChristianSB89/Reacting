import React from "react";
import Header from "./Header";
import Contact from "./ContactPara";
import { StyledHeader, StyledPara } from "./styled-components/styles";

function HomePage() {
  return (
    <div>
      <Header />
      <Contact />
    </div>
  );
}

export default HomePage;
