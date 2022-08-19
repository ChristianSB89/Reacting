import React from "react";
import {
  StyledContainer,
  StyledItem,
  StyledWrapper,
  StyledHeader,
} from "./styled-components/styles";

function Gallery() {
  return (
    <div>
      <StyledHeader>Gallery</StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <StyledItem></StyledItem>
          <StyledItem></StyledItem>
          <StyledItem></StyledItem>
        </StyledWrapper>
        <StyledWrapper>
          <StyledItem></StyledItem>
          <StyledItem></StyledItem>
          <StyledItem></StyledItem>
        </StyledWrapper>
        <StyledWrapper>
          <StyledItem></StyledItem>
          <StyledItem></StyledItem>
          <StyledItem></StyledItem>
        </StyledWrapper>
      </StyledContainer>
    </div>
  );
}

export default Gallery;
