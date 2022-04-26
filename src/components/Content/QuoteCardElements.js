import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  max-width: 385px;
  border-radius: 5px;

  img {
    width: 1rem;
  }
`;

export const Source = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 2.5rem;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  span {
    font-weight: 700;
  }
  p {
    font-size: 0.75rem;
  }
`;
