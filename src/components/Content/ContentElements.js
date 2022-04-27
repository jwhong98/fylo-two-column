import styled from "styled-components";
import curveBGD from "../../images/bg-curve-desktop.svg";

export const ContentContainer = styled.section`
  width: 100%;
  padding: 5rem 20px;
  background-image: url(${curveBGD});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: 2.13rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 500px;
  }

  a {
    text-decoration: none;
    color: hsl(170, 45%, 43%);
    margin-bottom: 1rem;
    padding-bottom: 0.15rem;
    border-bottom: 1px solid hsl(170, 45%, 43%);
  }
`;

export const ContentImg = styled.div`
  max-width: 550px;

  img {
    width: 100%;
    height: auto;
  }
`;
