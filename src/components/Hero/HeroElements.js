import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  padding: 1rem 20px;
`;

export const HeroWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 550px;
  padding: 0 1rem;

  h1 {
    font-size: 2.13rem;
    line-height: 1.5;
  }
`;

export const ImgContainer = styled.div`
  max-width: 550px;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
`;
