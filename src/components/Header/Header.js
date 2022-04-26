import React from "react";
import Navbar from "../Navbar/Navbar";
import { HeaderContainer, HeaderWrap } from "./HeaderElements";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <Navbar />
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
