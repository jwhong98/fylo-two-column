import styled from "styled-components";

export const EAContainer = styled.section`
  background: hsl(238, 22%, 44%);
  padding: 5rem 20px;
`;

export const EAWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EAText = styled.div`
  max-width: 500px;

  h1 {
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    color: hsl(240, 75%, 98%);
  }
`;

export const EAForm = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  button {
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    outline: none;
    color: #fff;
    background: hsl(224, 93%, 58%);
    text-transform: capitalize;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      filter: brightness(130%);
    }
  }
`;
