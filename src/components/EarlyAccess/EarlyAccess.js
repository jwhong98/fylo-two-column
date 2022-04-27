import React from "react";
import { EAContainer, EAWrap, EAText, EAForm } from "./EarlyAccessElements";

const EarlyAccess = () => {
  return (
    <EAContainer>
      <EAWrap>
        <EAText>
          <h1>Get Early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </EAText>
        <EAForm>
          <input type="text" name="" id="" />
          <button>get started for free</button>
        </EAForm>
      </EAWrap>
    </EAContainer>
  );
};

export default EarlyAccess;
