import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: hsl(243, 87%, 12%);
  padding: 5rem 20px;
`;

export const FooterWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItem = styled.li`
  a {
    color: hsl(240, 75%, 98%);
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
      color: hsl(238, 22%, 44%);
    }
  }
`;

export const Socials = styled.div``;
