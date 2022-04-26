import React from "react";
import { Nav, Logo, NavMenu, MenuItem } from "./NavbarElements";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <Logo src={logo} />
      <NavMenu>
        <MenuItem>
          <a href="/">features</a>
        </MenuItem>
        <MenuItem>
          <a href="/">team</a>
        </MenuItem>
        <MenuItem>
          <a href="/">sign in</a>
        </MenuItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
