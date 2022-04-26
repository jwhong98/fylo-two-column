import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const MenuItem = styled.li`
  a {
    text-decoration: none;
    font-weight: 700;
    text-transform: capitalize;
    color: hsl(243, 87%, 12%);
  }
`;
